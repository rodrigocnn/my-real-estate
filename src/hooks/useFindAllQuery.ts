import { useQuery } from "@tanstack/react-query";

interface UseFindAllQueryProps<T> {
  queryKey: string;
  queryFn: () => Promise<T[]>;
}

export function useFindAllQuery<T>(props: UseFindAllQueryProps<T>) {
  const { queryKey, queryFn } = props;
  const { data, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn,
  });

  return {
    isLoading: isLoading,
    data,
  };
}
