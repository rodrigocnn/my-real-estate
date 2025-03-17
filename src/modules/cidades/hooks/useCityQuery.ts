import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { citiesFindAll, cityFindOne } from "../api/cityApi";

export function useCitiesFindAll() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-cities"],
    queryFn: citiesFindAll,
  });

  return {
    isLoadingCities: isLoading,
    cities: data,
  };
}

export function useCityFindOne() {
  const [cityId, setCityId] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-city", cityId],
    queryFn: () => {
      if (!cityId) return Promise.resolve(null);
      return cityFindOne(cityId);
    },
    enabled: false,
  });

  const fetchCityById = async (id: string) => {
    console.log("Buscando cidade com id:", id);
    setCityId(id);
    await refetch(); // vai chamar a queryFn usando o cityId atualizado
  };

  return {
    isLoadingCity: isLoading,
    city: data,
    refetch: fetchCityById,
  };
}
