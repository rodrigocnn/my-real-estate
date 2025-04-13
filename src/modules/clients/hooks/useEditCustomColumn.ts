import { useState } from "react";

import { Client } from "../interfaces";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { clientUpdate } from "../api";

export function useEditCustomColum() {
  const props = {
    queryKey: "get-clients",
    onSuccessMsg: "Cliente atualizado com sucesso",
    mutationFn: (client: Client) => clientUpdate(client),
  };

  const {
    mutate: updateCityMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation<Client>(props);

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();

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
