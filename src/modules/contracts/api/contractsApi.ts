import api from "@/services/api";
import { Contract } from "../interfaces";

export const contractFindAll = async (): Promise<Contract[]> => {
  const response = await api.index("rental_contracts");
  return response.data;
};

export const contractCreate = async (contract: Contract): Promise<Contract> => {
  const response = await api.store("rental_contracts", contract);
  return response.data;
};

export const contractDelete = async (id: string): Promise<Contract> => {
  const response = await api.delete("rental_contracts", id);
  return response.data;
};

export const contractFindOne = async (id: string): Promise<Contract> => {
  const response = await api.show("rental_contracts", id);
  return response.data;
};

export const contractUpdate = async (contract: Contract): Promise<Contract> => {
  const response = await api.update(
    "rental_contracts",
    contract?.id as string,
    contract
  );
  return response.data;
};
