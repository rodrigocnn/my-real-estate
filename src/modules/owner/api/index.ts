import api from "@/services/api";
import { Owner } from "../interfaces";

export const ownersFindAll = async (): Promise<Owner[]> => {
  const response = await api.index("owners"); // ou "owners", dependendo da sua API
  return response.data;
};

export const ownerCreate = async (owner: Owner): Promise<Owner> => {
  const response = await api.store("owners", owner);
  return response.data;
};

export const ownerDelete = async (id: string): Promise<Owner> => {
  const response = await api.delete("owners", id);
  return response.data;
};

export const ownerFindOne = async (id: string): Promise<Owner> => {
  const response = await api.show("owners", id);
  return response.data;
};

export const ownerUpdate = async (owner: Owner): Promise<Owner> => {
  const response = await api.update("owners", owner?.id as string, owner);
  return response.data;
};
