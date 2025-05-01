import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/clients/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/clients/component/editCustomColumn";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Owner } from "@/modules/owner/interfaces";
import { propsFindAllOwners } from "@/modules/owner/constants";

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

export default function Proprietarios() {
  const { data: owners } = useFindAllQuery<Owner>(propsFindAllOwners);

  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/proprietarios/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={owners}
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
