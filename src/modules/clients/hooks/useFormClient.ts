import { useEffect, useState } from "react";
import { Client } from "../interfaces";

import { useCreateMutation } from "@/hooks/useCreateMutation";
import {
  INITIAL_STATE_FORM_CLIENT,
  propsCreateClient,
  propsUpdateClient,
} from "../constants";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { formatCPF, formatPhone } from "@/utils";

export const useFormClient = (initialData?: Client, edit: boolean = false) => {
  const [form, setForm] = useState<Client>(INITIAL_STATE_FORM_CLIENT);

  const {
    mutate: createClientMutate,
    isPending,
    status,
  } = useCreateMutation(propsCreateClient);

  const {
    mutate: updateClientMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useUpdateMutation(propsUpdateClient);

  // useEffect(() => {
  //   if (initialData) {
  //     setForm(initialData);
  //   }
  // }, [initialData]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = formatCPF(value);
    } else if (name === "phone") {
      formattedValue = formatPhone(value);
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: formattedValue,
    }));
  };

  const handleLocationChange = (latitude: number, longitude: number) => {
    setForm((prevForm) => ({
      ...prevForm,
      location: { latitude, longitude },
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    try {
      if (edit) {
        updateClientMutate(form);
      } else {
        createClientMutate(form);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_CLIENT);
  };

  return {
    form,
    setForm,
    handleChange,
    handleLocationChange,
    handleSubmit,
    resetForm,
    isPendingUpdate,
    statusUpdate,
    isPending,
    status,
  };
};
