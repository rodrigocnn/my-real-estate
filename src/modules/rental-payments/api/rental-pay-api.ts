import api from "@/services/api";
import { RentalPayment } from "../interfaces";

export const rentalPaymentFindAll = async (): Promise<RentalPayment[]> => {
  const response = await api.index("rent_payments");
  return response.data;
};

export const rentalPaymentFindByContract = async (
  id: string
): Promise<RentalPayment[]> => {
  const response = await api.index(`rent_payments/contract/${id}`);
  return response.data;
};

export const rentalPaymentCreate = async (
  payment: RentalPayment
): Promise<RentalPayment> => {
  const response = await api.store("rent_payments", payment);
  return response.data;
};

export const rentalPaymentDelete = async (
  id: string
): Promise<RentalPayment> => {
  const response = await api.delete("rent_payments", id);
  return response.data;
};

export const rentalPaymentFindOne = async (
  id: string
): Promise<RentalPayment> => {
  const response = await api.show("rent_payments", id);
  return response.data;
};

export const rentalPaymentUpdate = async (
  payment: RentalPayment
): Promise<RentalPayment> => {
  const response = await api.update(
    "rent_payments",
    payment.id as string,
    payment
  );
  return response.data;
};
