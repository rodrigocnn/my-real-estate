import { MouseEventHandler, useState } from "react";
import { Cidade } from "../interfaces";
import { useCityCreate } from "./useCityMutation";

export function useCreateCity() {
  const { mutate: createCityMutate, isPending, status } = useCityCreate();
  const [openModal, setOpenModal] = useState(false);
  const [city, setCity] = useState<Cidade | undefined>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const createCity = () => {
    createCityMutate(city as Cidade);
    if (status === "idle" || status === "success") {
      setCity(undefined);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleClick,
    handleChange,
    createCity,
    isPending,
    city,
  };
}
