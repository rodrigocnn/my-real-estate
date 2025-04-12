import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/clients/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/clients/component/editCustomColumn";
import { useClientsFindAll } from "@/modules/clients/hooks/useClientQuery";
import LayoutAdmin from "@/components/LayoutAdmin";

const columns = [
  {
    headerName: "Nome",
    field: "name",
  },

  {
    headerName: "Email",
    field: "email",
  },

  {
    headerName: "Telefone",
    field: "phone",
  },
];

export default function Clientes() {
  const { clients, isLoadingClients } = useClientsFindAll();
  const router = useRouter();

  console.log("clientes", clients);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    router.push("/admin/clientes/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={clients}
            columns={columns}
            addAction={{
              label: "Cadastrar Cliente",
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
