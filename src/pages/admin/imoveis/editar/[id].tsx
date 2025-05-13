import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";

import { FormProperty } from "@/modules/imoveis/components/form";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Owner } from "@/modules/owner/interfaces";
import { PropertyType } from "@/modules/property-types/interfaces";
import { propsFindAllOwners } from "@/modules/owner/constants";

import { propsFindAllPropertyTypes } from "@/modules/property-types/constants";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindOneQuery } from "@/hooks/useFindOneQuery";
import { propsFindOneProperty } from "@/modules/imoveis/constants";
import { useEffect } from "react";

export default function ImoveisEditar() {
  const router = useRouter();
  const { data: owners } = useFindAllQuery<Owner>(propsFindAllOwners);
  const { data: types } = useFindAllQuery<PropertyType>(
    propsFindAllPropertyTypes
  );
  const {
    data: property,
    isLoading,
    fetchById,
  } = useFindOneQuery(propsFindOneProperty);

  useEffect(() => {
    fetchById(router.query.id as string);
  }, [router.query.id]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Imóvel</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormProperty
          owners={owners || []}
          types={types || []}
          edit={true}
          initialData={property}
        />
      )}
    </LayoutAdmin>
  );
}
