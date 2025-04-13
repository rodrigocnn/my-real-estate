import { useState } from "react";

import { Property } from "../interfaces";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { propsDeleteProperty } from "../constants";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [property, setProperty] = useState<Property | undefined>();
  const {
    mutate: deletePropertyMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(propsDeleteProperty);

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
