import { useState } from "react";

import { Client } from "../interfaces";
import { useClientDelete } from "./useClientMutation";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();
  const { mutate: deleteCityMutate, isPending, isSuccess } = useClientDelete();

  const handleDelete = (row: Client) => {
    setOpenModal(true);
    setClient(row);
  };

  const deleteCity = () => {
    deleteCityMutate(client?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    isPending,
    client,
  };
}
