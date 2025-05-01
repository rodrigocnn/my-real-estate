import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindOneQuery } from "@/hooks/useFindOneQuery";
import { FormClient } from "@/modules/clients/component/form";
import { propsFindOneClient } from "@/modules/clients/constants";
import { Client } from "@/modules/clients/interfaces";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProprietariosCadastrar() {
  const router = useRouter();
  const { data, fetchById } = useFindOneQuery<Client>(propsFindOneClient);

  useEffect(() => {
    fetchById(router.query.id as string);
  }, [router.query.id]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Proprietário</h2>
      <FormClient edit={true} initialData={data as Client} />
    </LayoutAdmin>
  );
}
