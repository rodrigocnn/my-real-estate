import { useState } from "react";

import { Neighborhood } from "../interfaces";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { propsDeleteNeighborhood } from "../constants";

export function useNeighborhoodDelete() {
  const [openModal, setOpenModal] = useState(false);
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();
  const {
    mutate: deleteNeighborhoodMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(propsDeleteNeighborhood);

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
