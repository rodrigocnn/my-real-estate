import * as yup from "yup";

export const neighborhoodSchema = yup.object().shape({
  name: yup.string().required("O nome da Bairro é obrigatório"),
  cityId: yup.string().required("O nome da Cidade é obrigatório"),
});
