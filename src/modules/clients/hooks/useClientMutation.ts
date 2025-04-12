import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Client } from "../interfaces";
import { clientCreate, clientDelete, clientUpdate } from "../api";

export function useClientCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (client: Client) => clientCreate(client),
    onSuccess: () => {
      toast.success("Cliente cadastrado com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-clients"] });
    },
    onError: (error) => {
      toast.error("Erro ao cadastrar cliente");
    },
  });
}

export function useClientUpdate() {
  return useMutation({
    mutationFn: (client: Client) => clientUpdate(client),
    onSuccess: (data) => {
      console.log("Cliente atualizado com sucesso:", data);
    },
    onError: (error) => {
      console.error("Erro ao atualizar a cliente:", error);
    },
  });
}

export function useClientDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => clientDelete(id),
    onSuccess: (data) => {
      toast.success("Cliente excluído com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-clients"] });
    },
    onError: (error) => {
      toast.success("Não foi possível excluir o cliente");
    },
  });
}
