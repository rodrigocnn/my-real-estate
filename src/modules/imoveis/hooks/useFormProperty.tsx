import { useEffect, useState } from "react";

import { Property } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import {
  INITIAL_STATE_FORM_PROPERTY,
  propsCreateProperty,
  propsUpdateProperty,
} from "../constants";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";

export const useFormProperty = (
  initialData?: Property,
  edit: boolean = false
) => {
  const [form, setForm] = useState<Property>(INITIAL_STATE_FORM_PROPERTY);

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
        updatePropertyMutate(form);
      } else {
        createPropertyMutate(form);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_STATE_FORM_PROPERTY);
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
