import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";

import { RentalPayment } from "@/modules/rental-payments/interfaces";
import { DeleteRentalPaymentButton } from "@/modules/rental-payments/component/deleteRentalPaymentButton";
import { EditRentalPaymentButton } from "@/modules/rental-payments/component/editRentalPaymentButton";
import { propsFindAllRentalPayments } from "@/modules/rental-payments/constants";

const columns = [
  {
    headerName: "Contrato",
    field: "rentalContractId",
  },
  {
    headerName: "Vencimento",
    field: "dueDate",
  },
  {
    headerName: "Valor (R$)",
    field: "amount",
  },
  {
    headerName: "Status",
    field: "status",
  },
  {
    headerName: "Pago em",
    field: "paymentDate",
  },
];

export default function Pagamentos() {
  const { data: payments } = useFindAllQuery<RentalPayment>(
    propsFindAllRentalPayments
  );

  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/pagamentos/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen">
        <div className="overflow-x-auto">
          <DataGrid
            rows={payments}
            columns={columns}
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
