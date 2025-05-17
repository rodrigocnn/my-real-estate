import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { FormMapped, RentalPayment } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";

import {
  INITIAL_STATE_FORM_RENTAL_PAYMENT,
  propsCreateRentalPayment,
} from "../constants";
import { Contract } from "@/modules/contracts/interfaces";
import { mapRentalPayment } from "../mappers";
import { rentalPaymentUpdate } from "../api/rental-pay-api";
import { useRouter } from "next/navigation";
import { paymentsSchema } from "../validations";

export const useFormRentalPayment = (
  initialData?: RentalPayment,
  edit: boolean = false,
  contract?: Contract
) => {
  const [form, setForm] = useState<RentalPayment>(
    INITIAL_STATE_FORM_RENTAL_PAYMENT
  );
  const router = useRouter();

  const propsUpdateRentalPayment = {
    queryKey: "get-rental-payments",
    onSuccessMsg: "Lançamento atualizado com sucesso",
    mutationFn: (payment: RentalPayment) => rentalPaymentUpdate(payment),
    onSuccess: () => {
      router.push("/admin/pagamentos");
    },
  };

  const {
    mutate: createPaymentMutate,
    isPending,
    status,
  } = useCreateMutation(propsCreateRentalPayment);

  const {
    mutate: updatePaymentMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useUpdateMutation(propsUpdateRentalPayment);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

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

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    const formMapped = mapRentalPayment(form);
    if (await validation(formMapped)) {
      try {
        if (edit) {
          updatePaymentMutate(formMapped);
        } else {
          createPaymentMutate(formMapped);
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_RENTAL_PAYMENT);
  };

  return {
    form,
    setForm,
    handleChange,
    handleDateChange,
    handleChangeCurrency,
    handleSubmit,
    resetForm,
    isPendingUpdate,
    statusUpdate,
    isPending,
    status,
  };
};
