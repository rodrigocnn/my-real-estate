import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { FormContract } from "@/modules/contracts/components/form";
import { useFindOneQuery } from "@/hooks/useFindOneQuery";
import { Contract } from "@/modules/contracts/interfaces";
import { propsFindOneContract } from "@/modules/contracts/constants";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function ImoveisEditar() {
  const router = useRouter();
  const { data, fetchById, isLoading } =
    useFindOneQuery<Contract>(propsFindOneContract);

  useEffect(() => {
    fetchById(router.query.id as string);
  }, [router.query.id]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Imóvel</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormContract edit={true} initialData={data} />
      )}
    </LayoutAdmin>
  );
}
