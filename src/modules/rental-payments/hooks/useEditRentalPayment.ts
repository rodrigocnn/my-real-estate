import { useState } from "react";
import { useRouter } from "next/router";

import { RentalPayment } from "../interfaces";

import { useUpdateMutation } from "@/hooks/useUpdateMutation";
import { propsUpdateRentalPayment } from "../constants";

export function useEditRentalPayment() {
  const router = useRouter();

  const {
    mutate: updateRentalPaymentMutate,
    isPending,
    isSuccess,
  } = useUpdateMutation<RentalPayment>(propsUpdateRentalPayment);

  const [openModal, setOpenModal] = useState(false);
  const [payment, setPayment] = useState<RentalPayment | undefined>();

  const handleEdit = (row: RentalPayment) => {
    router.push(`/admin/pagamentos/editar/${row.id}`);
    setPayment(row);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPayment((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateRentalPayment = () => {
    updateRentalPaymentMutate(payment as RentalPayment);
  };

  return {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    updateRentalPayment,
    isPending,
    isSuccess,
    payment,
  };
}
