import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface useCreateMutationProps<T> {
  queryKey: string;
  onSuccessMsg: string;
  mutationFn: (item: T) => Promise<any>;
  onErrorMsg?: string;
  onSuccess?: () => void;
}

export function useCreateMutation<T>(props: useCreateMutationProps<T>) {
  const queryClient = useQueryClient();
  const { onSuccessMsg, queryKey, mutationFn, onSuccess } = props;

  return useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success(onSuccessMsg);
      queryClient.refetchQueries({ queryKey: [queryKey] });
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast.error("Erro ao realizar o cadastro");
    },
  });
}
