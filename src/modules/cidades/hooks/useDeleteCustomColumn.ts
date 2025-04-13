import { useState } from "react";

import { Cidade } from "../interfaces";
import { cityDelete } from "../api/cityApi";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";

export function useDeleteCustomColum() {
  const props = {
    queryKey: "get-cities",
    onSuccessMsg: "Cidade excluída com sucesso",
    mutationFn: (id: string) => cityDelete(id),
  };

  const {
    mutate: deleteCityMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(props);

  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();

  const handleDelete = (row: Cidade) => {
    setOpenModal(true);
    setCity(row);
  };

  const deleteCity = () => {
    deleteCityMutate(city?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    isPending,
    isSuccess,
    city,
  };
}
