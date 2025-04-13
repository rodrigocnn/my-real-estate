import { useState } from "react";

import { Cidade } from "../interfaces";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { cityUpdate } from "../api/cityApi";

export function useEditCustomColum() {
  const props = {
    queryKey: "get-cities",
    onSuccessMsg: "Cidade criada com sucesso",
    mutationFn: (city: Cidade) => cityUpdate(city),
  };

  const {
    mutate: updateCityMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation(props);

  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();

  const handleEdit = (row: Cidade) => {
    setOpenModal(true);
    setCity(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCity((prevCity) => {
      if (!prevCity) return prevCity;
      return {
        ...prevCity,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    updateCityMutate(city as Cidade);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateCity,
    isPending,
    isSuccess,
    city,
  };
}
