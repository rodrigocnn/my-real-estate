import { useState } from "react";

import { Client } from "../interfaces";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { clientUpdate } from "../api";
import { useRouter } from "next/router";
import { propsUpdateClient } from "../constants";

export function useEditCustomColum() {
  const router = useRouter();

  const {
    mutate: updateCityMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation<Client>(propsUpdateClient);

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();

  const handleEdit = (row: Client) => {
    router.push(`/admin/clientes/editar/${row.id}`);
    setClient(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setClient((prevCity) => {
      if (!prevCity) return prevCity;
      return {
        ...prevCity,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    updateCityMutate(client as Client);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateCity,
    isPending,
    isSuccess,
    client,
  };
}
