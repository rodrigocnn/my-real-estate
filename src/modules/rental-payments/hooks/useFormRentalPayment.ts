import { useEffect, useState } from "react";
import { RentalPayment } from "../interfaces";

import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";

import {
  INITIAL_STATE_FORM_RENTAL_PAYMENT,
  propsCreateRentalPayment,
  propsUpdateRentalPayment,
} from "../constants";

export const useFormRentalPayment = (
  initialData?: RentalPayment,
  edit: boolean = false
) => {
  const [form, setForm] = useState<RentalPayment>(
    INITIAL_STATE_FORM_RENTAL_PAYMENT
  );

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

    // Converte número quando necessário
    const parsedValue = name === "amount" ? parseFloat(value) : value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    try {
      if (edit) {
        updatePaymentMutate(form);
      } else {
        createPaymentMutate(form);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_RENTAL_PAYMENT);
  };

  return {
    form,
    setForm,
    handleChange,
    handleSubmit,
    resetForm,
    isPendingUpdate,
    statusUpdate,
    isPending,
    status,
  };
};
