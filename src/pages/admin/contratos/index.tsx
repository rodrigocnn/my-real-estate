import { useMemo } from "react";
import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/imoveis/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/imoveis/components/editCustomColumn";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Contract } from "@/modules/contracts/interfaces";
import { propsFindAllContract } from "@/modules/contracts/constants";
import { columnsContract } from "@/modules/contracts/constants/columns";

import LayoutAdmin from "@/components/LayoutAdmin";

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
        startDate: formatDateToPtBR(contract.startDate),
        endDate: formatDateToPtBR(contract.endDate),
      })) || []
    );
  }, [contracts]);

  return (
    <LayoutAdmin>
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
