import { useState } from "react";

import { Contract } from "../interfaces";
import { usePropertyUpdate } from "./useContractMutation";
import { useRouter } from "next/router";

export function useEditCustomColum() {
  const router = useRouter();
  const [contract, setContract] = useState<Contract | undefined>();
  const {
    mutate: updatePropertyMutate,
    isPending,
    isSuccess,
  } = usePropertyUpdate();

  const handleEdit = (row: Contract) => {
    router.push(`/admin/contratos/editar/${row.id}`);
    setContract(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setContract((prevContract) => {
      if (!prevContract) return prevContract;
      return {
        ...prevContract,
        [name]: value,
      };
    });
  };

  const updateCity = () => {
    updatePropertyMutate(contract as Contract);
  };

  return {
    handleEdit,
    handleChange,
    updateCity,
    isPending,
    isSuccess,
    contract,
  };
}
