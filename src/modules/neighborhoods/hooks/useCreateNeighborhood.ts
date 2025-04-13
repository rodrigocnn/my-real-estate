import { MouseEventHandler, useState } from "react";

import { Neighborhood } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { propsCreateNeighborhood } from "../constants";

export function useCreateNeighborhood() {
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();

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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNeighborhood((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const createtNeighborhood = () => {
    createNeighborhoodMutate(neighborhood as Neighborhood);
    if (status === "idle" || status === "success") {
      setNeighborhood(undefined);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleClick,
    handleChange,
    createtNeighborhood,
    isPending,
    neighborhood,
  };
}
