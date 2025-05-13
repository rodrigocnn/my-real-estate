export interface RentalPayment {
  id?: string;
  rentalContractId: string;
  dueDate: string;
  paymentDate: string;
  amount: number;
  status: string;
}
