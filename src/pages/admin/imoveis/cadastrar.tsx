import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { FormProperty } from "@/modules/imoveis/components/form";

import { propsFindAllOwners } from "@/modules/owner/constants";
import { Owner } from "@/modules/owner/interfaces";
import { propsFindAllPropertyTypes } from "@/modules/property-types/constants";
import { PropertyType } from "@/modules/property-types/interfaces";

export default function ImoveisCadastrar() {
  const { data: owners } = useFindAllQuery<Owner>(propsFindAllOwners);
  const { data: types } = useFindAllQuery<PropertyType>(
    propsFindAllPropertyTypes
  );

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Imóvel</h2>
      <FormProperty owners={owners || []} types={types || []} />
    </LayoutAdmin>
  );
}
