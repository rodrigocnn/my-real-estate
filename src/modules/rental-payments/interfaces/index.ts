export interface RentalPayment {
  id?: string;
  rental_contract_id: string;
  due_date: Date | string | null;
  payment_date: Date | string | null;
  amount: number;
  status: string;
}

export interface FormMapped {
  id?: string;
  rental_contract_id: string;
  due_date: Date | string | null;
  payment_date: Date | string | null;
  amount: number;
  status: string;
}
