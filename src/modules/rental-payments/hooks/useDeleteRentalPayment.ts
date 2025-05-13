import { useState } from "react";

import { RentalPayment } from "../interfaces";

import { useDeleteMutation } from "@/hooks/useDeleteMutate";
import { rentalPaymentDelete } from "../api/rental-pay-api";

export function useDeleteRentalPayment() {
  const props = {
    queryKey: "get-rental-payments",
    onSuccessMsg: "Pagamento excluído com sucesso",
    mutationFn: (id: string) => rentalPaymentDelete(id),
  };

  const {
    mutate: deleteRentalPaymentMutate,
    isPending,
    isSuccess,
  } = useDeleteMutation(props);

  const [openModal, setOpenModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<
    RentalPayment | undefined
  >();

  const handleDelete = (row: RentalPayment) => {
    setOpenModal(true);
    setSelectedPayment(row);
  };

  const deleteRentalPayment = () => {
    if (selectedPayment?.id) {
      deleteRentalPaymentMutate(selectedPayment.id);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleDelete,
    deleteRentalPayment,
    isPending,
    selectedPayment,
    isSuccess,
  };
}
