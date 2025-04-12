import api from "@/services/api";
import { Client } from "../interfaces";

export const clientsFindAll = async (): Promise<Client[]> => {
  const response = await api.index("clientes");
  return response.data;
};

export const clientCreate = async (client: Client): Promise<Client> => {
  const response = await api.store("clientes", client);
  return response.data;
};

export const clientDelete = async (id: string): Promise<Client> => {
  const response = await api.delete("clientes", id);
  return response.data;
};

export const clientFindOne = async (id: string): Promise<Client> => {
  const response = await api.show("clientes", id);
  return response.data;
};

export const clientUpdate = async (client: Client): Promise<Client> => {
  const response = await api.update("clientes", client?.id as string, client);
  return response.data;
};
