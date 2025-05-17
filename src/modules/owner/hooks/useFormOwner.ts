import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import * as Yup from "yup";

import { Owner } from "../interfaces";

import { useCreateMutation } from "@/hooks/useCreateMutation";
import {
  INITIAL_STATE_FORM_OWNER,
  propsCreateOwner,
  propsUpdateOwner,
} from "../constants";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { ownersSchema } from "../validations";
import { formatCPF, formatPhone } from "@/utils";

export const useFormOwner = (initialData?: Owner, edit: boolean = false) => {
  const [form, setForm] = useState<Owner>(INITIAL_STATE_FORM_OWNER);
  const router = useRouter();
  const {
    mutate: createOwnerMutate,
    isPending,
    status,
  } = useCreateMutation(propsCreateOwner);

  const {
    mutate: updateOwnerMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useUpdateMutation(propsUpdateOwner);

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

  const validation = async (form: Owner) => {
    try {
      await ownersSchema.validate(form);
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
        edit ? updateOwnerMutate(form) : createOwnerMutate(form);

        if (status === "idle" || status === "success") {
          router.push("/admin/proprietarios");
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_OWNER);
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
