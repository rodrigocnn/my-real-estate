export interface RentalPayment {
  id?: string;
  rental_contract_id: string;
  due_date: string;
  payment_date: string;
  amount: number;
  status: string;
}
