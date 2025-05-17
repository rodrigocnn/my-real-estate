import { RentalPayment } from "../interfaces";

export function mapRentalPayment(form: RentalPayment): RentalPayment {
  const formMapped = { ...form };

  const dueDate = form.due_date;
  formMapped.due_date =
    dueDate && typeof dueDate !== "string" ? dueDate.toISOString() : dueDate;

  const paymentDate = form.payment_date;
  formMapped.payment_date =
    paymentDate && typeof paymentDate !== "string"
      ? paymentDate.toISOString()
      : paymentDate;

  return formMapped;
}
