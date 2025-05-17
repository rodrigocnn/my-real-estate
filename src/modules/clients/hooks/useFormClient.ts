import { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Client } from "../interfaces";

import { useCreateMutation } from "@/hooks/useCreateMutation";
import {
  INITIAL_STATE_FORM_CLIENT,
  propsCreateClient,
  propsUpdateClient,
} from "../constants";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { formatCPF, formatPhone } from "@/utils";
import { useRouter } from "next/router";
import { clientsSchema } from "../validations";

export const useFormClient = (initialData?: Client, edit: boolean = false) => {
  const [form, setForm] = useState<Client>(INITIAL_STATE_FORM_CLIENT);
  const router = useRouter();

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

  const validation = async (form: Client) => {
    try {
      await clientsSchema.validate(form);
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

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    if (await validation(form)) {
      try {
        if (edit) {
          updateClientMutate(form);
        } else {
          createClientMutate(form);
        }

        if (status === "idle" || status === "success") {
          router.push("/admin/clientes");
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
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
