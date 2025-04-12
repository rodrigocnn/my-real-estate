import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { contractFindAll, contractFindOne } from "../api/contractsApi";

export function useContractFindAll() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-contracts"],
    queryFn: contractFindAll,
  });

  return {
    isLoadingProperties: isLoading,
    properties: data,
  };
}

export function useContractFindOne() {
  const [contractId, setContractId] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-contract", contractId],
    queryFn: () => {
      if (!contractId) return Promise.resolve(null);
      return contractFindOne(contractId);
    },
    enabled: false,
  });

  const fetchContractById = async (id: string) => {
    setContractId(id);
    await refetch();
  };

  return {
    isLoadingProperty: isLoading,
    property: data,
    refetch: fetchContractById,
    contractId,
  };
}
