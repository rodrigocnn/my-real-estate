import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Neighborhood } from "../interfaces";
import {
  NeighborhoodCreate,
  NeighborhoodDelete,
  NeighborhoodUpdate,
} from "../api/neighborhoodApi";

export function useNeighborhoodCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (neighborhood: Neighborhood) =>
      NeighborhoodCreate(neighborhood),
    onSuccess: () => {
      toast.success("Bairro cadastrado com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-neighborhoods"] });
    },
    onError: (error) => {
      toast.error("Erro ao cadastrar bairro");
    },
  });
}

export function useNeighborhoodUpdate() {
  return useMutation({
    mutationFn: (neighborhood: Neighborhood) =>
      NeighborhoodUpdate(neighborhood),
    onSuccess: (data) => {
      console.log("Bairro atualizada com sucesso:", data);
    },
    onError: (error) => {
      console.error("Erro ao atualizar o bairro:", error);
    },
  });
}

export function useNeighborhoodDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => NeighborhoodDelete(id),
    onSuccess: (data) => {
      toast.success("Bairro excluído com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-neighborhoods"] });
    },
    onError: (error) => {
      toast.success("Não foi possível excluir o bairro");
    },
  });
}
