import { useEffect, useState } from "react";
import { Property } from "../interfaces";
import { usePropertyCreate, usePropertyUpdate } from "./usePropertyMutation";

export const useFormProperty = (
  initialData?: Property,
  edit: boolean = false
) => {
  const [form, setForm] = useState<Property>({
    title: "",
    negotiationType: "SALE",
    description: "",
    bedrooms: 0,
    bathrooms: 0,
    suites: 0,
    price: 0,
    address: "",
    latitude: null,
    longitude: null,
    neighborhood: "",
    cityId: "",
    state: "",
  });

  const {
    mutate: createPropertyMutate,
    isPending,
    status,
  } = usePropertyCreate();

  const {
    mutate: updatePropertyMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = usePropertyUpdate();

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
    setForm({
      title: "",
      negotiationType: "SALE",
      description: "",
      bedrooms: 0,
      bathrooms: 0,
      suites: 0,
      price: 0,
      address: "",
      latitude: null,
      longitude: null,
      neighborhood: "",
      cityId: "",
      state: "",
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
