import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Property } from "../interfaces";
import {
  propertyCreate,
  propertyDelete,
  propertyUpdate,
} from "../api/propertyApi";
import { useRouter } from "next/router";

export function usePropertyCreate() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (property: Property) => propertyCreate(property),
    onSuccess: () => {
      toast.success("Imóvel cadastrado com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-properties"] });
      router.push("/admin/imoveis/");
    },
    onError: (error) => {
      toast.error("Erro ao cadastrar imóvel");
    },
  });
}

export function usePropertyUpdate() {
  const router = useRouter();
  return useMutation({
    mutationFn: (property: Property) => propertyUpdate(property),
    onSuccess: (data) => {
      toast.success("Imóvel atualizado com sucesso");
      router.push("/admin/imoveis/");
    },
    onError: (error) => {
      console.error("Erro ao atualizar a cidade:", error);
    },
  });
}

export function usePropertyDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => propertyDelete(id),
    onSuccess: (data) => {
      toast.success("Imovel excluído com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-properties"] });
    },
    onError: (error) => {
      toast.success("Não foi possível excluir a cidades");
    },
  });
}
