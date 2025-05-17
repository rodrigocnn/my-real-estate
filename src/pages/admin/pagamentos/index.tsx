import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { RentalPayment } from "@/modules/rental-payments/interfaces";
import { DeleteRentalPaymentButton } from "@/modules/rental-payments/component/deleteRentalPaymentButton";
import { EditRentalPaymentButton } from "@/modules/rental-payments/component/editRentalPaymentButton";
import { propsFindAllRentalPayments } from "@/modules/rental-payments/constants";
import { useMemo } from "react";
import { formatarToCurrencyBR, formatDateToPtBR } from "@/utils";
import { columnsRentalPayment } from "@/modules/rental-payments/constants/columns";
import { FilterPayment } from "@/modules/rental-payments/component/filterPayment";

export default function Pagamentos() {
  const router = useRouter();
  const { data: payments } = useFindAllQuery<RentalPayment>(
    propsFindAllRentalPayments
  );

  const formattedPayments = useMemo(() => {
    return (
      payments?.map((payment) => ({
        ...payment,
        due_date: formatDateToPtBR(payment.due_date as string),
        payment_date: formatDateToPtBR(payment.payment_date as string),
        amount: formatarToCurrencyBR(payment.amount),
      })) || []
    );
  }, [payments]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/pagamentos/cadastrar");
  }

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Pagamentos</h2>
      <FilterPayment />

      <div className="bg-white p-4 rounded h-screen">
        <div className="overflow-x-auto">
          <DataGrid
            rows={formattedPayments}
            columns={columnsRentalPayment}
            addAction={{
              label: "Cadastrar Pagamento",
              onClick: handleClick,
            }}
            columnsFormatters={[
              {
                component: EditRentalPaymentButton,
                label: "Editar",
                field: "editar",
              },
              {
                component: DeleteRentalPaymentButton,
                label: "Excluir",
                field: "excluir",
              },
            ]}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
