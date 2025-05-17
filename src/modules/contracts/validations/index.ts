import * as yup from "yup";

export const contractsSchema = yup.object().shape({
  status: yup.string().required("Status é obrigatório"),
  monthly_rent: yup.number().required("Valor do aluguel é obrigatório"),
  deposit_amount: yup.number().required("Valor do depósito é obrigatório"),
  end_date: yup.string().required("Data de término é obrigatória"),
  start_date: yup.string().required("Data de início é obrigatória"),
  property_id: yup.string().required("Imóvel é obrigatório"),
  client_id: yup.string().required("Cliente é obrigatório"),
});
