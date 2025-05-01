import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { FormProperty } from "@/modules/imoveis/components/form";
import { usePropertyFindOne } from "@/modules/imoveis/hooks/usePropertyQuery";
import LayoutAdmin from "@/components/LayoutAdmin";
import { propsFindOneClient } from "@/modules/clients/constants";

export default function ImoveisEditar() {
  const router = useRouter();
  const { refetch, isLoadingProperty, property, propertyId } =
    usePropertyFindOne(propsFindOneClient);

  useEffect(() => {
    refetch(router.query.id as string);
  }, [propertyId, router.query.id]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Imóvel</h2>
      {isLoadingProperty ? (
        <Spinner />
      ) : (
        <FormProperty edit={true} initialData={property} />
      )}
    </LayoutAdmin>
  );
}
