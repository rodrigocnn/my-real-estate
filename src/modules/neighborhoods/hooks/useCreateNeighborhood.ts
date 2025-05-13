import { MouseEventHandler, useState } from "react";

import { Neighborhood } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { propsCreateNeighborhood } from "../constants";
import { neighborhoodSchema } from "../validation";

export function useCreateNeighborhood() {
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    mutate: createNeighborhoodMutate,
    isPending,
    status,
  } = useCreateMutation(propsCreateNeighborhood);
  const [openModal, setOpenModal] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setErrors({});
    setOpenModal(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNeighborhood((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const createNeighborhood = async () => {
    try {
      await neighborhoodSchema.validate(neighborhood, { abortEarly: false });

      createNeighborhoodMutate(neighborhood as Neighborhood);
      if (status === "idle" || status === "success") {
        setNeighborhood(undefined);
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
    handleClick,
    handleChange,
    createNeighborhood,
    handleCloseModal,
    isPending,
    errors,
    neighborhood,
  };
}
