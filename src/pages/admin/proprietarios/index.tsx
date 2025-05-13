import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/owner/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/owner/component/editCustomColumn";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Owner } from "@/modules/owner/interfaces";
import { propsFindAllOwners } from "@/modules/owner/constants";
import { columnsOwners } from "@/modules/owner/constants/columns";
import LayoutAdmin from "@/components/LayoutAdmin";

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
            columns={columnsOwners}
            addAction={{
              label: "Cadastrar Proprietário",
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
