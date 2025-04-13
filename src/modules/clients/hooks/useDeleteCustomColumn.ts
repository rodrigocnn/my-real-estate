import { useState } from "react";

import { Client } from "../interfaces";
import { useClientDelete } from "./useClientMutation";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { clientDelete } from "../api";

export function useDeleteCustomColum() {
  const props = {
    queryKey: "get-cities",
    onSuccessMsg: "Cidade excluída com sucesso",
    mutationFn: (id: string) => clientDelete(id),
  };

  const {
    mutate: deleteCityMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(props);

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();

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
