import { MouseEventHandler, useState } from "react";
import { Cidade } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { cityCreate } from "../api/cityApi";
import { citySchema } from "../validation";

export function useCreateCity() {
  const props = {
    queryKey: "get-cities",
    onSuccessMsg: "Cidade criada com sucesso",
    mutationFn: (city: Cidade) => cityCreate(city),
  };

  const { mutate, isPending, status } = useCreateMutation<Cidade>(props);
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const handleCloseModal = () => {
    setErrors({});
    setOpenModal(false);
  };

  const createCity = async () => {
    try {
      await citySchema.validate(city, { abortEarly: false });
      mutate(city as Cidade);
      if (status === "idle" || status === "success") {
        setCity(undefined);
        setErrors({});
        setOpenModal(false);
      }
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const validationErrors = error.inner.reduce((acc: any, err: any) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      }
    }
  };

  return {
    openModal,
    setOpenModal,
    handleCloseModal,
    handleClick,
    handleChange,
    createCity,
    isPending,
    errors,
    city,
  };
}
