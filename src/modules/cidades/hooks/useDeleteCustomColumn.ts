import { useState } from "react";

import { Cidade } from "../interfaces";
import { useCityDelete } from "./useCityMutation";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();
  const { mutate: deleteCityMutate, isPending, isSuccess } = useCityDelete();

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
