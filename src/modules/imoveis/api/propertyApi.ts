import api from "@/services/api";
import { Property } from "../interfaces";

export const propertiesFindAll = async (): Promise<Property[]> => {
  const response = await api.index("imoveis");
  return response.data;
};

export const propertyCreate = async (property: Property): Promise<Property> => {
  const response = await api.store("imoveis", property);
  return response.data;
};

export const propertyDelete = async (id: string): Promise<Property> => {
  const response = await api.delete("imoveis", id);
  return response.data;
};

export const propertyFindOne = async (id: string): Promise<Property> => {
  const response = await api.show("imoveis", id);
  return response.data;
};

export const propertyUpdate = async (property: Property): Promise<Property> => {
  const response = await api.update(
    "imoveis",
    property?.id as string,
    property
  );
  return response.data;
};
