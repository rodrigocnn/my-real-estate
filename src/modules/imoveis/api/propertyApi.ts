import api from "@/services/api";
import { Property } from "../interfaces";

export const propertiesFindAll = async (): Promise<Property[]> => {
  const response = await api.index("properties");
  return response.data;
};

export const propertyCreate = async (property: Property): Promise<Property> => {
  const response = await api.store("properties", property);
  return response.data;
};

export const propertyDelete = async (id: string): Promise<Property> => {
  const response = await api.delete("properties", id);
  return response.data;
};

export const propertyFindOne = async (id: string): Promise<Property> => {
  const response = await api.show("properties", id);
  return response.data;
};

export const propertyUpdate = async (property: Property): Promise<Property> => {
  const response = await api.update(
    "properties",
    property?.id as any,
    property
  );
  return response.data;
};
