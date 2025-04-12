import { useEffect, useState } from "react";
import { Contract } from "../interfaces";
import { useContractCreate, useContractUpdate } from "./useContractMutation";
import { useClientsFindAll } from "@/modules/clients/hooks/useClientQuery";
import { usePropertiesFindAll } from "@/modules/imoveis/hooks/usePropertyQuery";

export const useFormContract = (
  initialData?: Contract,
  edit: boolean = false
) => {
  const [form, setForm] = useState<Contract>({
    clientId: "",
    propertyId: "",
    startDate: "",
    endDate: "",
    monthlyRent: 0,
    depositAmount: 0,
    status: "",
  });

  const { clients } = useClientsFindAll();
  const { properties } = usePropertiesFindAll();

  const {
    mutate: createContractMutate,
    isPending,
    status,
  } = useContractCreate();

  const {
    mutate: updateContractMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useContractUpdate();

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
        updateContractMutate(form);
      } else {
        const formMapped = { ...form };
        formMapped.monthlyRent = Number(formMapped.monthlyRent);
        formMapped.depositAmount = Number(formMapped.depositAmount);
        createContractMutate(formMapped);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm({
      clientId: "",
      propertyId: "",
      startDate: "",
      endDate: "",
      monthlyRent: 0,
      depositAmount: 0,
      status: "",
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
    clients,
    properties,
  };
};
