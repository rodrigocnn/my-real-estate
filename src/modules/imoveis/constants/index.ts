import {
  propertiesFindAll,
  propertyCreate,
  propertyDelete,
  propertyUpdate,
} from "../api/propertyApi";
import { Property } from "../interfaces";

export const INITIAL_STATE_FORM_PROPERTY = {
  title: "",
  negotiationType: "SALE" as string,
  description: "",
  bedrooms: 0,
  bathrooms: 0,
  suites: 0,
  price: 0,
  address: "",
  latitude: null,
  longitude: null,
  neighborhood: "",
  cityId: "",
  state: "",
};

export const propsFindAllProperties = {
  queryKey: "get-properties",
  queryFn: propertiesFindAll,
};

export const propsCreateProperty = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel cadastrado com sucesso",
  mutationFn: (property: Property) => propertyCreate(property),
};

export const propsUpdateProperty = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel atualizado com sucesso",
  mutationFn: (property: Property) => propertyUpdate(property),
};

export const propsDeleteProperty = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel excluído com sucesso",
  mutationFn: (id: string) => propertyDelete(id),
};
