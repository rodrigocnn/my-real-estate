import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Contract } from "../interfaces";
import {
  contractCreate,
  contractDelete,
  contractUpdate,
} from "../api/contractsApi";
import { useRouter } from "next/router";

export function useContractCreate() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (contract: Contract) => contractCreate(contract),
    onSuccess: () => {
      toast.success("contrato cadastrado com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-contracts"] });
      router.push("/admin/contratos");
    },
    onError: (error) => {
      toast.error("Erro ao cadastrar imóvel");
    },
  });
}

export function useContractUpdate() {
  const router = useRouter();
  return useMutation({
    mutationFn: (contract: Contract) => contractUpdate(contract),
    onSuccess: (data) => {
      toast.success("Contrato atualizado com sucesso");
      router.push("/admin/contratos/");
    },
    onError: (error) => {
      console.error("Erro ao atualizar a cidade:", error);
    },
  });
}

export function useContractDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => contractDelete(id),
    onSuccess: (data) => {
      toast.success("Contrato excluído com sucesso!");
      queryClient.refetchQueries({ queryKey: ["get-contracts"] });
    },
    onError: (error) => {
      toast.success("Não foi possível excluir o contrato");
    },
  });
}
