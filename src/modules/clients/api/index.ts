import api from "@/services/api";
import { Client } from "../interfaces";

export const clientsFindAll = async (): Promise<Client[]> => {
  const response = await api.index("clients");
  return response.data;
};

export const clientCreate = async (client: Client): Promise<Client> => {
  const response = await api.store("clients", client);
  return response.data;
};

export const clientDelete = async (id: string): Promise<Client> => {
  const response = await api.delete("clients", id);
  return response.data;
};

export const clientFindOne = async (id: string): Promise<Client> => {
  const response = await api.show("clients", id);
  return response.data;
};

export const clientUpdate = async (client: Client): Promise<Client> => {
  const response = await api.update("clients", client?.id as string, client);
  return response.data;
};
