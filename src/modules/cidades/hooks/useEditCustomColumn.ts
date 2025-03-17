import { useState } from "react";

import { Cidade } from "../interfaces";
import { useCityUpdate } from "./useCityMutation";

export function useEditCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();
  const { mutate: updateCityMutate, isPending, isSuccess } = useCityUpdate();

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
