import api from "@/services/api";
import { Cidade } from "../interfaces";

export const citiesFindAll = async (): Promise<Cidade[]> => {
  const response = await api.index("cities");
  return response.data;
};

export const cityCreate = async (city: Cidade): Promise<Cidade> => {
  const response = await api.store("cities", city);
  return response.data;
};

export const cityDelete = async (id: string): Promise<Cidade> => {
  const response = await api.delete("cities", id);
  return response.data;
};

export const cityFindOne = async (id: string): Promise<Cidade> => {
  const response = await api.show("cities", id);
  return response.data;
};

export const cityUpdate = async (city: Cidade): Promise<Cidade> => {
  const response = await api.update("cities", city?.id as string, city);
  return response.data;
};
