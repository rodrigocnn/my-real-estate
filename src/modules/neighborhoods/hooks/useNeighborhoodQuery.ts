import { useQuery } from "@tanstack/react-query";

import { useState } from "react";

import {
  neighborhoodFindAll,
  NeighborhoodFindOne,
} from "../api/neighborhoodApi";

export function useNeighborhoodFindAll() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-neighborhoods"],
    queryFn: neighborhoodFindAll,
  });

  return {
    isLoadingNeighborhoods: isLoading,
    neighborhoods: data,
  };
}

export function useNeighborhoodFindOne() {
  const [neighborhoodId, setNeighborhoodId] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-neighborhood", neighborhoodId],
    queryFn: () => {
      if (!neighborhoodId) return Promise.resolve(null);
      return NeighborhoodFindOne(neighborhoodId);
    },
    enabled: false,
  });

  const fetchNeighborhoodIdById = async (id: string) => {
    setNeighborhoodId(id);
    await refetch();
  };

  return {
    isLoadingCity: isLoading,
    city: data,
    refetch: fetchNeighborhoodIdById,
  };
}
