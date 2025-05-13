import { useQuery } from "@tanstack/react-query";
import { RentalPayment } from "../interfaces";
import { rentalPaymentFindByContract } from "../api/rental-pay-api";

export function useModalRentalPayment(id: string) {
  const queryPayment = useQuery<RentalPayment[]>({
    queryKey: ["get-payments-by-contract", id], // inclua `id` na key para cache individual por contrato
    queryFn: () => rentalPaymentFindByContract(id),
  });

  return {
    payments: queryPayment.data,
    isLoading: queryPayment.isLoading,
    error: queryPayment.error,
  };
}
