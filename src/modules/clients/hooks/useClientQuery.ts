import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { clientsFindAll, clientFindOne } from "../api";

export function useClientsFindAll() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-clients"],
    queryFn: clientsFindAll,
  });

  return {
    isLoadingClients: isLoading,
    clients: data,
  };
}

export function useClientFindOne() {
  const [clientId, setClientId] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-client", clientId],
    queryFn: () => {
      if (!clientId) return Promise.resolve(null);
      return clientFindOne(clientId);
    },
    enabled: false,
  });

  const fetchClientById = async (id: string) => {
    setClientId(id);
    await refetch();
  };

  return {
    isLoadingClient: isLoading,
    client: data,
    refetch: fetchClientById,
  };
}
