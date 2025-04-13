import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface useDeleteMutationProps<T> {
  queryKey: string;
  onSuccessMsg: string;
  mutationFn: (id: string) => Promise<any>;
  onErrorMsg?: string;
}

export function useDeleteMutation<T>(props: useDeleteMutationProps<T>) {
  const queryClient = useQueryClient();
  const { onSuccessMsg, queryKey, mutationFn } = props;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success(onSuccessMsg);
      queryClient.refetchQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      toast.error("Não foi possível realizar exclusão");
    },
  });
}
