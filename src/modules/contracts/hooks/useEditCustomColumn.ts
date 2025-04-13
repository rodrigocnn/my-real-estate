import { useState } from "react";

import { Contract } from "../interfaces";
import { useRouter } from "next/router";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { propsUpdateContract } from "../constants";

export function useEditCustomColum() {
  const router = useRouter();
  const [contract, setContract] = useState<Contract | undefined>();
  const {
    mutate: updatePropertyMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation(propsUpdateContract);

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

  const updateContract = () => {
    updatePropertyMutate(contract as Contract);
  };

  return {
    handleEdit,
    handleChange,
    updateContract,
    isPending,
    isSuccess,
    contract,
  };
}
