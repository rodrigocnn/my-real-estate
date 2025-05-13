import api from "@/services/api";
import { PropertyType } from "../interfaces";

export const propertyTypesFindAll = async (): Promise<PropertyType[]> => {
  const response = await api.index("property_types");
  return response.data;
};

export const propertyTypesCreate = async (
  property_types: PropertyType
): Promise<PropertyType> => {
  const response = await api.store("property_types", property_types);
  return response.data;
};

export const propertyTypesDelete = async (
  id: string
): Promise<PropertyType> => {
  const response = await api.delete("property_types", id);
  return response.data;
};

export const propertyTypesFindOne = async (
  id: string
): Promise<PropertyType> => {
  const response = await api.show("property_types", id);
  return response.data;
};

export const propertyTypesUpdate = async (
  property_types: PropertyType
): Promise<PropertyType> => {
  const response = await api.update(
    "property_types",
    property_types?.id as string,
    property_types
  );
  return response.data;
};
