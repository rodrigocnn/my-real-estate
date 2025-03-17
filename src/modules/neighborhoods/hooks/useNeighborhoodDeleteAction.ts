import { useState } from "react";

import { Neighborhood } from "../interfaces";
import { useNeighborhoodDelete } from "./useNeighborhoodMutation";

export function useNeighborhoodDeleteAction() {
  const [openModal, setOpenModal] = useState(false);
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();
  const {
    mutate: deleteNeighborhoodMutate,
    isPending,
    isSuccess,
  } = useNeighborhoodDelete();

  const handleDelete = (row: Neighborhood) => {
    setOpenModal(true);
    setNeighborhood(row);
  };

  const deleteNeighborhood = () => {
    deleteNeighborhoodMutate(neighborhood?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteNeighborhood,
    isPending,
    isSuccess,
    neighborhood,
  };
}
