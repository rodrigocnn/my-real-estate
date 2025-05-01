import { useState } from "react";

import { Owner } from "../interfaces";
import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { ownerDelete } from "../api";

export function useDeleteOwnerColumn() {
  const props = {
    queryKey: "get-owners",
    onSuccessMsg: "Proprietário excluído com sucesso",
    mutationFn: (id: string) => ownerDelete(id),
  };

  const {
    mutate: deleteOwnerMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(props);

  const [openModal, setOpenModal] = useState(false);
  const [owner, setOwner] = useState<Owner | undefined>();

  const handleDelete = (row: Owner) => {
    setOpenModal(true);
    setOwner(row);
  };

  const deleteOwner = () => {
    if (owner?.id) {
      deleteOwnerMutate(owner.id);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteOwner,
    isPending,
    owner,
  };
}
