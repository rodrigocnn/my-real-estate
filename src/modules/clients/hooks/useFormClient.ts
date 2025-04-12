import { useEffect, useState } from "react";
import { Client } from "../interfaces";

import { useClientCreate, useClientUpdate } from "./useClientMutation";

export const useFormClient = (initialData?: Client, edit: boolean = false) => {
  const [form, setForm] = useState<Client>({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });

  const { mutate: createClientMutate, isPending, status } = useClientCreate();

  const {
    mutate: updateClientMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useClientUpdate();

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
        updateClientMutate(form);
      } else {
        createClientMutate(form);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      cpf: "",
      phone: "",
    });
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
