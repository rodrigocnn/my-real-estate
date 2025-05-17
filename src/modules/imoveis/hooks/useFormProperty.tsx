import { useState } from "react";
import * as Yup from "yup";

import { Property } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import {
  INITIAL_STATE_FORM_PROPERTY,
  propsCreateProperty,
  propsUpdateProperty,
} from "../constants";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { useRouter } from "next/router";
import { propertySchema } from "../validations";
import { validation } from "@/utils/validations";

export const useFormProperty = (edit: boolean = false) => {
  const [form, setForm] = useState<Property>(INITIAL_STATE_FORM_PROPERTY);
  const router = useRouter();

  const {
    mutate: createPropertyMutate,
    isPending,
    status,
  } = useCreateMutation(propsCreateProperty);

  const {
    mutate: updatePropertyMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useUpdateMutation(propsUpdateProperty);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    const numericFields = [
      "bedrooms",
      "bathrooms",
      "suites",
      "price",
      "latitude",
      "longitude",
    ];
    const newValue = numericFields.includes(name) ? Number(value) : value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
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

    if (await validation(form, propertySchema as Yup.Schema)) {
      try {
        if (edit) {
          updatePropertyMutate(form);
          if (statusUpdate === "idle" || statusUpdate === "success") {
            router.push("/admin/imoveis");
          }
        } else {
          if (status === "idle" || status === "success") {
            router.push("/admin/imoveis");
          }
          createPropertyMutate(form);
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_PROPERTY);
  };

  return {
    form,
    setForm,
    handleChange,
    handleChangeCurrency,
    handleLocationChange,
    handleSubmit,
    resetForm,
    isPendingUpdate,
    statusUpdate,
    isPending,
    status,
  };
};
