import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface UseFindOneQueryProps<T> {
  queryKey: string;
  queryFn: (id: string) => Promise<T>;
  enabled?: boolean;
}

export function useFindOneQuery<T>(props: UseFindOneQueryProps<T>) {
  const { queryKey, queryFn, enabled = false } = props;
  const [id, setId] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery<T | null>({
    queryKey: [queryKey, id],
    queryFn: () => {
      if (!id) return Promise.resolve(null);
      return queryFn(id);
    },
    enabled,
  });

  const fetchById = async (newId: string) => {
    setId(newId);
    await refetch();
  };

  return {
    data,
    isLoading,
    fetchById,
    id,
  };
}
