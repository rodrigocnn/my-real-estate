import { useState } from "react";

import { Client } from "../interfaces";
import { useClientUpdate } from "./useClientMutation";

export function useEditCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();
  const { mutate: updateCityMutate, isPending, isSuccess } = useClientUpdate();

  const handleEdit = (row: Client) => {
    setOpenModal(true);
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
