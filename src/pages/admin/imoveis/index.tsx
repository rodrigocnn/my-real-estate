import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/imoveis/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/imoveis/components/editCustomColumn";
import { usePropertiesFindAll } from "@/modules/imoveis/hooks/usePropertyQuery";
import LayoutAdmin from "@/components/LayoutAdmin";

const columns = [
  {
    headerName: "Imóveis",
    field: "title",
  },

  {
    headerName: "Tipo de Negociação",
    field: "negotiationType",
  },
];

export default function Imoveis() {
  const { properties } = usePropertiesFindAll();
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    router.push("/admin/imoveis/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={properties}
            columns={columns}
            addAction={{
              label: "Cadastrar Imóvel",
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
