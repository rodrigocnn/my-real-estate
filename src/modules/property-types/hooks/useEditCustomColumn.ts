import { useState } from "react";

import { PropertyType } from "../interfaces";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { propertyTypesUpdate } from "../api";

export function useEditCustomColum() {
  const props = {
    queryKey: "get-types",
    onSuccessMsg: "Tipo de Imóvel atualizado com sucesso",
    mutationFn: (propertyType: PropertyType) =>
      propertyTypesUpdate(propertyType),
  };

  const {
    mutate: updateCityMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation(props);

  const [openModal, setOpenModal] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyType | undefined>();

  const handleEdit = (row: PropertyType) => {
    setOpenModal(true);
    setPropertyType(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPropertyType((prevType) => {
      if (!prevType) return prevType;
      return {
        ...prevType,
        [name]: value,
      };
    });
  };

  const updatePropertyType = () => {
    updateCityMutate(propertyType as PropertyType);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updatePropertyType,
    isPending,
    isSuccess,
    propertyType,
  };
}
