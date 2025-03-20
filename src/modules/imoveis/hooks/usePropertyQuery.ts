import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { propertiesFindAll, propertyFindOne } from "../api/propertyApi";

export function usePropertiesFindAll() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-properties"],
    queryFn: propertiesFindAll,
  });

  return {
    isLoadingProperties: isLoading,
    properties: data,
  };
}

export function usePropertyFindOne() {
  const [propertyId, setPropertyId] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-property", propertyId],
    queryFn: () => {
      if (!propertyId) return Promise.resolve(null);
      return propertyFindOne(propertyId);
    },
    enabled: false,
  });

  const fetchPropertyById = async (id: string) => {
    setPropertyId(id);
    await refetch();
  };

  return {
    isLoadingProperty: isLoading,
    property: data,
    refetch: fetchPropertyById,
    propertyId,
  };
}
