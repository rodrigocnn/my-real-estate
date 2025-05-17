import { useMemo } from "react";
import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/contracts/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/contracts/components/editCustomColumn";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Contract } from "@/modules/contracts/interfaces";
import { propsFindAllContract } from "@/modules/contracts/constants";
import { columnsContract } from "@/modules/contracts/constants/columns";

import { OpenPaymentsColumn } from "@/modules/contracts/components/openPaymentsColumn";
import LayoutAdmin from "@/components/LayoutAdmin";
import { FilterPayment } from "@/modules/rental-payments/component/filterPayment";

export default function Imoveis() {
  const { data: contracts } = useFindAllQuery<Contract>(propsFindAllContract);
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/contratos/cadastrar");
  }

  function formatDateToPtBR(dateString?: string): string {
    if (!dateString) return "";
    return new Intl.DateTimeFormat("pt-BR").format(new Date(dateString));
  }

  const formattedContracts = useMemo(() => {
    return (
      contracts?.map((contract) => ({
        ...contract,

        clientName: contract.client?.name ?? "",
        propertyTitle: contract.property?.title ?? "",
        startDate: formatDateToPtBR(contract.start_date as string),
        endDate: formatDateToPtBR(contract.end_date as string),
      })) || []
    );
  }, [contracts]);

  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Contratos</h2>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={formattedContracts}
            columns={columnsContract}
            addAction={{
              label: "Cadastrar Contrato",
              onClick: handleClick,
            }}
            columnsFormatters={[
              {
                component: OpenPaymentsColumn,
                label: "Pagamentos",
                field: "id",
              },

              {
                component: EditCustomColumn,
                label: "Editar",
                field: "editar",
              },
              {
                component: DeleteCustomColumn,
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
