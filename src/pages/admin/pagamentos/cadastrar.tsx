import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { propsFindAllContract } from "@/modules/contracts/constants";
import { Contract } from "@/modules/contracts/interfaces";

import { FormRentalPayment } from "@/modules/rental-payments/component/formRentalPayment";

export default function PagamentosCadastrar() {
  const { data: contracts } = useFindAllQuery<Contract>(propsFindAllContract);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Pagamentos</h2>
      <FormRentalPayment constracts={contracts} />
    </LayoutAdmin>
  );
}
