import { propertyTypesFindAll } from "../api";

export const propsFindAllPropertyTypes = {
  queryKey: "get-types",
  queryFn: propertyTypesFindAll,
};
