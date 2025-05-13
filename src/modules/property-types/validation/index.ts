import * as yup from "yup";

export const PropertyTypeSchema = yup.object().shape({
  name: yup.string().required("O tipo do imóvel é obrigatório"),
});
