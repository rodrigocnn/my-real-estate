import * as yup from "yup";

export const paymentsSchema = yup.object().shape({
  rental_contract_id: yup.string().required("Contrato é obrigatório"),
  due_date: yup.string().required("Data de Vencimento é obrigatório"),
  amount: yup.number().required("Valor é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
});
