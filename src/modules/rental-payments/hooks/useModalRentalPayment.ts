import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { FormMapped, RentalPayment } from "../interfaces";
import {
  rentalPaymentCreate,
  rentalPaymentFindByContract,
} from "../api/rental-pay-api";
import { useMemo, useState } from "react";
import { INITIAL_STATE_FORM_RENTAL_PAYMENT } from "../constants";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { formatDateToPtBR } from "@/utils";

import { paymentsSchema } from "../validations";

export function useModalRentalPayment(id: string) {
  const [createMode, setCreateMode] = useState<boolean>(false);
  const [form, setForm] = useState<RentalPayment>(
    INITIAL_STATE_FORM_RENTAL_PAYMENT
  );

  const propsCreateRentalPayment = {
    queryKey: "get-rental-payments",
    onSuccessMsg: "Lançamento criado com sucesso",
    mutationFn: (payment: RentalPayment) => rentalPaymentCreate(payment),
    onSuccess: () => {
      setCreateMode(false);
      resetForm();
    },
  };
  const { mutate: createPaymentMutate } = useCreateMutation(
    propsCreateRentalPayment
  );

  const queryPayment = useQuery<RentalPayment[]>({
    queryKey: ["get-payments-by-contract", id],
    queryFn: () => rentalPaymentFindByContract(id),
  });

  const payments = useMemo(() => {
    return (
      queryPayment.data?.map((payment) => ({
        ...payment,
        due_date: formatDateToPtBR(payment.due_date as string),
        payment_date: formatDateToPtBR(payment.payment_date as string),
      })) || []
    );
  }, [queryPayment.data]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    const parsedValue = name === "amount" ? parseFloat(value) : value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: parsedValue,
    }));
  };

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validation = async (form: FormMapped) => {
    try {
      await paymentsSchema.validate(form);
      return true;
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        error.errors.forEach((errMsg) => {
          toast.error(errMsg);
        });
      } else {
        toast.error("Erro inesperado na validação.");
      }
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formMapped = { ...form };
      formMapped.rental_contract_id = id;
      formMapped.status = "Pendente";
      if (await validation(formMapped)) {
        createPaymentMutate(formMapped);
      }
    } catch (error) {
      resetForm();
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_RENTAL_PAYMENT);
  };

  return {
    payments,
    isLoading: queryPayment.isLoading,
    error: queryPayment.error,
    form,
    handleChange,
    handleChangeCurrency,
    handleSubmit,
    handleDateChange,
    createMode,
    setCreateMode,
  };
}
