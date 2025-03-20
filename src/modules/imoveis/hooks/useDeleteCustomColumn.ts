import { useState } from "react";

import { usePropertyDelete } from "./usePropertyMutation";
import { Property } from "../interfaces";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [property, setProperty] = useState<Property | undefined>();
  const {
    mutate: deletePropertyMutate,
    isPending,
    isSuccess,
  } = usePropertyDelete();

  const handleDelete = (row: Property) => {
    setOpenModal(true);
    setProperty(row);
  };

  const deleteCity = () => {
    deletePropertyMutate(property?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    isPending,
    isSuccess,
    property,
  };
}
