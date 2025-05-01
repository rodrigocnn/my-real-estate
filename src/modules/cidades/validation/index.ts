import * as yup from "yup";

export const citySchema = yup.object().shape({
  name: yup.string().required("O nome da cidade é obrigatório"),
});
