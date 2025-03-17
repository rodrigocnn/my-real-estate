import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Cidade } from "../interfaces";
import { cityCreate, cityDelete, cityUpdate } from "../api/cityApi";

export function useCityCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (city: Cidade) => cityCreate(city),
    onSuccess: () => {
      toast.success("Cidade cadastrada com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-cities"] });
    },
    onError: (error) => {
      toast.error("Erro ao cadastrar cidade");
    },
  });
}

export function useCityUpdate() {
  return useMutation({
    mutationFn: (city: Cidade) => cityUpdate(city),
    onSuccess: (data) => {
      console.log("Cidade atualizada com sucesso:", data);
    },
    onError: (error) => {
      console.error("Erro ao atualizar a cidade:", error);
    },
  });
}

export function useCityDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => cityDelete(id),
    onSuccess: (data) => {
      toast.success("Cidade excluída com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-cities"] });
    },
    onError: (error) => {
      toast.success("Não foi possível excluir a cidades");
    },
  });
}
