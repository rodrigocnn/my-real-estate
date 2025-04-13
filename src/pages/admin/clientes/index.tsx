import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/clients/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/clients/component/editCustomColumn";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { clientsFindAll } from "@/modules/clients/api";
import { Client } from "@/modules/clients/interfaces";

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
  const props = {
    queryKey: "get-cities",
    queryFn: clientsFindAll,
  };

  const { data: clients } = useFindAllQuery<Client>(props);

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
