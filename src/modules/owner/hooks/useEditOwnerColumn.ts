import { useState } from "react";
import { useRouter } from "next/router";

import { Owner } from "../interfaces";
import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { propsUpdateOwner } from "../constants";

export function useEditOwnerColumn() {
  const router = useRouter();

  const {
    mutate: updateOwnerMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation<Owner>(propsUpdateOwner);

  const [openModal, setOpenModal] = useState(false);
  const [owner, setOwner] = useState<Owner | undefined>();

  const handleEdit = (row: Owner) => {
    router.push(`/admin/proprietarios/editar/${row.id}`);
    setOwner(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setOwner((prevOwner) => {
      if (!prevOwner) return prevOwner;
      return {
        ...prevOwner,
        [name]: value,
      };
    });
  };

  const updateOwner = () => {
    if (owner) {
      updateOwnerMutate(owner);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateOwner,
    isPending,
    isSuccess,
    owner,
  };
}
