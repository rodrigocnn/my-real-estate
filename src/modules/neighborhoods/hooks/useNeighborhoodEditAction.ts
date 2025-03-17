import { useState } from "react";

import { Neighborhood } from "../interfaces";
import { useNeighborhoodUpdate } from "./useNeighborhoodMutation";

export function useNeighborhoodEditAction() {
  const [openModal, setOpenModal] = useState(false);
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();
  const {
    mutate: updateNeighborhoodMutate,
    isPending,
    isSuccess,
  } = useNeighborhoodUpdate();

  const handleEdit = (row: Neighborhood) => {
    setOpenModal(true);
    setNeighborhood(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNeighborhood((prevNeighborhood) => {
      if (!prevNeighborhood) return prevNeighborhood;
      return {
        ...prevNeighborhood,
        [name]: value,
      };
    });
  };

  const updateNeighborhood = () => {
    updateNeighborhoodMutate(neighborhood as Neighborhood);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateNeighborhood,
    isPending,
    isSuccess,
    neighborhood,
  };
}
