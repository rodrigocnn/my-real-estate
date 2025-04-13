import { MouseEventHandler, useState } from "react";
import { Client } from "../interfaces";
import { useCreateMutation } from "@/hooks/useCreateMutation";
import { clientCreate } from "../api";

export function useCreateCity() {
  const props = {
    queryKey: "get-clients",
    onSuccessMsg: "Cliente cadastrado com sucesso",
    mutationFn: (client: Client) => clientCreate(client),
  };

  const {
    mutate: createCityMutate,
    isPending,
    status,
  } = useCreateMutation<Client>(props);

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState<Client | undefined>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClient((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const createClient = () => {
    createCityMutate(client as Client);
    if (status === "idle" || status === "success") {
      setClient(undefined);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleClick,
    handleChange,
    createClient,
    isPending,
    client,
  };
}
