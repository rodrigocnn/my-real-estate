import api from "@/services/api";
import { Contract } from "../interfaces";

export const contractFindAll = async (): Promise<Contract[]> => {
  const response = await api.index("contratos");
  return response.data;
};

export const contractCreate = async (contract: Contract): Promise<Contract> => {
  const response = await api.store("contratos", contract);
  return response.data;
};

export const contractDelete = async (id: string): Promise<Contract> => {
  const response = await api.delete("contratos", id);
  return response.data;
};

export const contractFindOne = async (id: string): Promise<Contract> => {
  const response = await api.show("contratos", id);
  return response.data;
};

export const contractUpdate = async (contract: Contract): Promise<Contract> => {
  const response = await api.update(
    "contratos",
    contract?.id as string,
    contract
  );
  return response.data;
};
