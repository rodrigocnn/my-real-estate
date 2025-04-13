import { MouseEventHandler, useState } from "react";
import { Cidade } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { cityCreate } from "../api/cityApi";

export function useCreateCity() {
  const props = {
    queryKey: "get-cities",
    onSuccessMsg: "Cidade criada com sucesso",
    mutationFn: (city: Cidade) => cityCreate(city),
  };

  const { mutate, isPending, status } = useCreateMutation<Cidade>(props);

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
    mutate(city as Cidade);
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
