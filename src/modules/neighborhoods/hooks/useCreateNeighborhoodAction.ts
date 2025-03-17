import { MouseEventHandler, useState } from "react";

import { useNeighborhoodCreate } from "./useNeighborhoodMutation";
import { Neighborhood } from "../interfaces";

export function useCreateNeighborhoodAction() {
  const {
    mutate: createNeighborhoodMutate,
    isPending,
    status,
  } = useNeighborhoodCreate();
  const [openModal, setOpenModal] = useState(false);
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();

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
