import { useState } from "react";

import { useContractDelete } from "./useContractMutation";
import { Contract } from "../interfaces";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [contract, setContract] = useState<Contract | undefined>();
  const {
    mutate: deletContractMutate,
    isPending,
    isSuccess,
  } = useContractDelete();

  const handleDelete = (row: Contract) => {
    setOpenModal(true);
    setContract(row);
  };

  const deleteCity = () => {
    deletContractMutate(contract?.id as string);
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteCity,
    isPending,
    isSuccess,
    contract,
  };
}
