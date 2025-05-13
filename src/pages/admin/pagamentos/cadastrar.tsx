import LayoutAdmin from "@/components/LayoutAdmin";

import { FormRentalPayment } from "@/modules/rental-payments/component/form";

export default function PagamentosCadastrar() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Pagamentos</h2>
      <FormRentalPayment />
    </LayoutAdmin>
  );
}
