import { useState } from "react";

import { Contract } from "../interfaces";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { propsDeleteContract } from "../constants";

export function useDeleteCustomColum() {
  const [openModal, setOpenModal] = useState(false);
  const [contract, setContract] = useState<Contract | undefined>();
  const {
    mutate: deletContractMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(propsDeleteContract);

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
