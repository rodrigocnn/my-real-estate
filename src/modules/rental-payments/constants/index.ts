import {
  rentalPaymentCreate,
  rentalPaymentFindAll,
  rentalPaymentFindOne,
  rentalPaymentUpdate,
} from "../api/rental-pay-api";
import { RentalPayment } from "../interfaces";

export const INITIAL_STATE_FORM_RENTAL_PAYMENT = {
  rentalContractId: "",
  dueDate: "",
  paymentDate: "",
  amount: 0,
  status: "",
};

export const propsFindAllRentalPayments = {
  queryKey: "get-rental-payments",
  queryFn: rentalPaymentFindAll,
};

export const propsFindOneRentalPayment = {
  queryKey: "get-rental-payment",
  queryFn: (id: string) => rentalPaymentFindOne(id),
  enabled: true,
};

export const propsCreateRentalPayment = {
  queryKey: "get-rental-payments",
  onSuccessMsg: "Lançamento criado com sucesso",
  mutationFn: (payment: RentalPayment) => rentalPaymentCreate(payment),
};

export const propsUpdateRentalPayment = {
  queryKey: "get-rental-payments",
  onSuccessMsg: "Lançamento atualizado com sucesso",
  mutationFn: (payment: RentalPayment) => rentalPaymentUpdate(payment),
};
