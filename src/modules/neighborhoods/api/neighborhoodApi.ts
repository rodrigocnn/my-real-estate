import api from "@/services/api";
import { Neighborhood } from "../interfaces";

export const neighborhoodFindAll = async (): Promise<Neighborhood[]> => {
  const response = await api.index("bairros");
  return response.data;
};

export const NeighborhoodCreate = async (
  neighborhood: Neighborhood
): Promise<Neighborhood> => {
  const response = await api.store("bairros", neighborhood);
  return response.data;
};

export const NeighborhoodDelete = async (id: string): Promise<Neighborhood> => {
  const response = await api.delete("bairros", id);
  return response.data;
};

export const NeighborhoodFindOne = async (
  id: string
): Promise<Neighborhood> => {
  const response = await api.show("bairros", id);
  return response.data;
};

export const NeighborhoodUpdate = async (
  neighborhood: Neighborhood
): Promise<Neighborhood> => {
  const response = await api.update(
    "bairros",
    neighborhood?.id as string,
    neighborhood
  );
  return response.data;
};
