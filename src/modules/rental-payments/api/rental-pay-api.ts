import api from "@/services/api";
import { RentalPayment } from "../interfaces";

export const rentalPaymentFindAll = async (): Promise<RentalPayment[]> => {
  const response = await api.index("pagamentos");
  return response.data;
};

export const rentalPaymentCreate = async (
  payment: RentalPayment
): Promise<RentalPayment> => {
  const response = await api.store("pagamentos", payment);
  return response.data;
};

export const rentalPaymentDelete = async (
  id: string
): Promise<RentalPayment> => {
  const response = await api.delete("pagamentos", id);
  return response.data;
};

export const rentalPaymentFindOne = async (
  id: string
): Promise<RentalPayment> => {
  const response = await api.show("pagamentos", id);
  return response.data;
};

export const rentalPaymentUpdate = async (
  payment: RentalPayment
): Promise<RentalPayment> => {
  const response = await api.update(
    "pagamentos",
    payment.id as string,
    payment
  );
  return response.data;
};
