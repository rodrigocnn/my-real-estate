import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/clients/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/clients/component/editCustomColumn";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Client } from "@/modules/clients/interfaces";
import { propsFindAllClients } from "@/modules/clients/constants";
import { columnsClients } from "@/modules/clients/constants/columns";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Clientes() {
  const { data: clients } = useFindAllQuery<Client>(propsFindAllClients);

  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/clientes/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={clients}
            columns={columnsClients}
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
