import { useState } from "react";

import { Property } from "../interfaces";
import { useRouter } from "next/router";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { propsUpdateProperty } from "../constants";

export function useEditCustomColum() {
  const router = useRouter();
  const [property, setProperty] = useState<Property | undefined>();
  const {
    mutate: updatePropertyMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation(propsUpdateProperty);

  const handleEdit = (row: Property) => {
    router.push(`/admin/imoveis/editar/${row.id}`);
    setProperty(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setProperty((prevProperty) => {
      if (!prevProperty) return prevProperty;
      return {
        ...prevProperty,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    updatePropertyMutate(property as Property);
  };

  return {
    handleEdit,
    handleChange,
    updateCity,
    isPending,
    isSuccess,
    property,
  };
}
