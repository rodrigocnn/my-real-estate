import * as yup from "yup";

export const clientsSchema = yup.object().shape({
  phone: yup.string().required("Telefone é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
});
