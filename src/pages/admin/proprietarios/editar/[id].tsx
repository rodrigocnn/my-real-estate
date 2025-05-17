import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindOneQuery } from "@/hooks/useFindOneQuery";
import { FormOwner } from "@/modules/owner/component/form";

import { propsFindOneOwner } from "@/modules/owner/constants";
import { Owner } from "@/modules/owner/interfaces";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProprietariosCadastrar() {
  const router = useRouter();
  const { data, fetchById } = useFindOneQuery<Owner>(propsFindOneOwner);

  useEffect(() => {
    fetchById(router.query.id as string);
  }, [router.query.id]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Proprietário</h2>
      <FormOwner edit={true} initialData={data as Owner} />
    </LayoutAdmin>
  );
}
