import api from "@/services/api";
import { Cidade } from "../interfaces";

export const citiesFindAll = async (): Promise<Cidade[]> => {
  const response = await api.index("cidades");
  return response.data;
};

export const cityCreate = async (city: Cidade): Promise<Cidade> => {
  const response = await api.store("cidades", city);
  return response.data;
};

export const cityDelete = async (id: string): Promise<Cidade> => {
  const response = await api.delete("cidades", id);
  return response.data;
};

export const cityFindOne = async (id: string): Promise<Cidade> => {
  const response = await api.show("cidades", id);
  return response.data;
};

export const cityUpdate = async (city: Cidade): Promise<Cidade> => {
  const response = await api.update("cidades", city?.id as string, city);
  return response.data;
};
