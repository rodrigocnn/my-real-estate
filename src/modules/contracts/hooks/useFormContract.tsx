import { useState } from "react";
import { Contract, DateFormContract } from "../interfaces";

import { useCreateMutation } from "@/hooks/useCreateMutation";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import {
  INITIAL_FORM_CONTRACT,
  propsCreateContract,
  propsUpdateContract,
} from "../constants";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";

import { Property } from "@/modules/imoveis/interfaces";
import { propsFindAllClients } from "@/modules/clients/constants";
import { Client } from "@/modules/clients/interfaces";
import { propsFindAllProperties } from "@/modules/imoveis/constants";
import { mapContractFormData } from "../mapper";

export const useFormContract = (edit: boolean = false) => {
  const [form, setForm] = useState<Contract>(INITIAL_FORM_CONTRACT);

  const { data: clients } = useFindAllQuery<Client>(propsFindAllClients);
  const { data: properties } = useFindAllQuery<Property>(
    propsFindAllProperties
  );

  const {
    mutate: createContractMutate,
    isPending,
    status,
  } = useCreateMutation<Contract>(propsCreateContract);

  const {
    mutate: updateContractMutate,
    isPending: isPendingUpdate,
    status: statusUpdate,
  } = useUpdateMutation<Contract>(propsUpdateContract);

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
  const handleDateChange = (name: string, value: Date | null) => {
    console.log("entrou");
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeCurrency = (name: string, value: number | undefined) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();

    try {
      if (edit) {
        updateContractMutate(form);
      } else {
        const formMapped = mapContractFormData(form);
        createContractMutate(formMapped);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM_CONTRACT);
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
    clients,
    properties,
    handleDateChange,
    handleChangeCurrency,
  };
};
