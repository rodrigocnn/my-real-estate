import * as yup from "yup";

export const propertySchema = yup.object().shape({
  state: yup.string().required("Estado é obrigatório"),
  city_id: yup.number().required("Cidade é obrigatória"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  suites: yup.number().required("Número de suítes é obrigatório"),
  bathrooms: yup.number().required("Número de banheiros é obrigatório"),
  bedrooms: yup.number().required("Número de quartos é obrigatório"),
  price: yup.number().required("Preço é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  title: yup.string().required("Título é obrigatório"),
  negotiation_type: yup.string().required("Tipo de negociação é obrigatório"),
  owner_id: yup.number().required("Proprietário é obrigatório"),
  property_type_id: yup.number().required("Tipo do imóvel é obrigatório"),
});
