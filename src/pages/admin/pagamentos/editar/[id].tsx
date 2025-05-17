import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { useFindOneQuery } from "@/hooks/useFindOneQuery";
import { propsFindAllContract } from "@/modules/contracts/constants";
import { Contract } from "@/modules/contracts/interfaces";

import { FormRentalPayment } from "@/modules/rental-payments/component/formRentalPayment";
import { propsFindOneRentalPayment } from "@/modules/rental-payments/constants";
import { RentalPayment } from "@/modules/rental-payments/interfaces";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PagamentosEditar() {
  const router = useRouter();
  const { data, fetchById } = useFindOneQuery<RentalPayment>(
    propsFindOneRentalPayment
  );

  const { data: contracts } = useFindAllQuery<Contract>(propsFindAllContract);

  useEffect(() => {
    fetchById(router.query.id as string);
  }, [router.query.id]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Editar Pagamento</h2>
      <FormRentalPayment
        edit={true}
        constracts={contracts}
        initialData={data as RentalPayment}
      />
    </LayoutAdmin>
  );
}
