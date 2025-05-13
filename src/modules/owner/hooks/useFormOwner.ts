import { useState } from "react";
import { Owner } from "../interfaces";

import { useCreateMutation } from "@/hooks/useCreateMutation";
import {
  INITIAL_STATE_FORM_OWNER,
  propsCreateOwner,
  propsUpdateOwner,
} from "../constants";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { useRouter } from "next/router";

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

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    try {
      edit ? updateOwnerMutate(form) : createOwnerMutate(form);

      if (status === "idle" || status === "success") {
        router.push("/admin/proprietarios");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
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
