import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/imoveis/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/imoveis/components/editCustomColumn";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useContractFindAll } from "@/modules/contracts/hooks/useContractQuery";

const columns = [
  {
    headerName: "Cliente",
    field: "clientName",
  },

  {
    headerName: "Imóvel",
    field: "propertyTitle",
  },

  {
    headerName: "Data Início",
    field: "startDate",
  },

  {
    headerName: "Data Fim",
    field: "endDate",
  },
];

export default function Imoveis() {
  const { properties } = useContractFindAll();
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    router.push("/admin/contratos/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={properties}
            columns={columns}
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
