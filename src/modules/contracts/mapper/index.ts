import { Contract, DateFormContract } from "../interfaces";

export function mapContractFormData(
  form: Contract,
  dateForm: DateFormContract
): Contract {
  return {
    ...form,
    monthlyRent: Number(form.monthlyRent),
    depositAmount: Number(form.depositAmount),
    startDate: dateForm.startDate?.toISOString() ?? "",
    endDate: dateForm.endDate?.toISOString() ?? "",
    status: "active",
  };
}
