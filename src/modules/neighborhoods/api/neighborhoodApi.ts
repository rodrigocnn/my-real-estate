import api from "@/services/api";
import { Neighborhood } from "../interfaces";

export const neighborhoodFindAll = async (): Promise<Neighborhood[]> => {
  const response = await api.index("neighborhoods");
  return response.data;
};

export const NeighborhoodCreate = async (
  neighborhood: Neighborhood
): Promise<Neighborhood> => {
  const response = await api.store("neighborhoods", neighborhood);
  return response.data;
};

export const NeighborhoodDelete = async (id: string): Promise<Neighborhood> => {
  const response = await api.delete("neighborhoods", id);
  return response.data;
};

export const NeighborhoodFindOne = async (
  id: string
): Promise<Neighborhood> => {
  const response = await api.show("neighborhoods", id);
  return response.data;
};

export const NeighborhoodUpdate = async (
  neighborhood: Neighborhood
): Promise<Neighborhood> => {
  const response = await api.update(
    "neighborhoods",
    neighborhood?.id as string,
    neighborhood
  );
  return response.data;
};
