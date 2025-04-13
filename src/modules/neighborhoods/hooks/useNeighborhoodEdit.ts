import { useState } from "react";

import { Neighborhood } from "../interfaces";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { propsUpdateNeighborhood } from "../constants";

export function useNeighborhoodEdit() {
  const [openModal, setOpenModal] = useState(false);
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>();
  const {
    mutate: updateNeighborhoodMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation(propsUpdateNeighborhood);

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
