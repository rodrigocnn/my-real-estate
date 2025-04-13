import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface useCreateMutationProps<T> {
  queryKey: string;
  onSuccessMsg: string;
  mutationFn: (item: T) => Promise<any>;
  onErrorMsg?: string;
}

export function useCreateMutation<T>(props: useCreateMutationProps<T>) {
  const queryClient = useQueryClient();
  const { onSuccessMsg, queryKey, mutationFn } = props;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success(onSuccessMsg);
      queryClient.refetchQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
