import {
  propertiesFindAll,
  propertyCreate,
  propertyDelete,
  propertyFindOne,
  propertyUpdate,
} from "../api/propertyApi";
import { Property } from "../interfaces";

export const INITIAL_STATE_FORM_PROPERTY = {
  title: "",
  negotiation_type: "",
  description: "",
  bedrooms: 0,
  bathrooms: 0,
  suites: 0,
  price: 0,
  address: "",
  latitude: 0,
  longitude: 0,
  neighborhood: "",
  city_id: -1,
  property_type_id: -1,
  owner_id: -1,
  state: "",
};

export const propsFindAllProperties = {
  queryKey: "get-properties",
  queryFn: propertiesFindAll,
};

export const propsFindOneProperty = {
  queryKey: "get-property",
  queryFn: (id: string) => propertyFindOne(id),
  enabled: true,
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
