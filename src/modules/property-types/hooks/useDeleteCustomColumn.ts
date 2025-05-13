import { useState } from "react";

import { PropertyType } from "../interfaces";
import { propertyTypesDelete } from "../api";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";

export function useDeleteCustomColum() {
  const props = {
    queryKey: "get-types",
    onSuccessMsg: "Tipo de Imóvel excluído com sucesso",
    mutationFn: (id: string) => propertyTypesDelete(id),
  };

  const {
    mutate: deletePropertyTypeMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(props);

  const [openModal, setOpenModal] = useState(false);

  const [propertyType, setPropertyType] = useState<PropertyType | undefined>();

  const handleDelete = (row: PropertyType) => {
    setOpenModal(true);
    setPropertyType(row);
  };

  const deletePropertyType = () => {
    deletePropertyTypeMutate(propertyType?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deletePropertyType,
    isPending,
    isSuccess,
    propertyType,
  };
}
