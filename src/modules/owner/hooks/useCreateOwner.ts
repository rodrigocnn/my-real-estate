import { MouseEventHandler, useState } from "react";
import { Owner } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { ownerCreate } from "../api"; // Assumindo que você tem essa função na API

export function useCreateOwner() {
  const props = {
    queryKey: "get-owners", // atualize conforme a query associada ao Owner
    onSuccessMsg: "Proprietário cadastrado com sucesso",
    mutationFn: (owner: Owner) => ownerCreate(owner),
  };

  const {
    mutate: createOwnerMutate,
    isPending,
    status,
  } = useCreateMutation<Owner>(props);

  const [openModal, setOpenModal] = useState(false);
  const [owner, setOwner] = useState<Owner | undefined>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwner((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const createOwner = () => {
    if (owner) {
      createOwnerMutate(owner);
      if (status === "idle" || status === "success") {
        setOwner(undefined);
      }
    }
  };

  return {
    openModal,
    setOpenModal,
    handleClick,
    handleChange,
    createOwner,
    isPending,
    owner,
  };
}
