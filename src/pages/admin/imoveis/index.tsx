import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/imoveis/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/imoveis/components/editCustomColumn";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { propsFindAllProperties } from "@/modules/imoveis/constants";
import { Property } from "@/modules/imoveis/interfaces";
import { columnsProperties } from "@/modules/imoveis/constants/columns";

export default function Imoveis() {
  const { data: properties } = useFindAllQuery<Property>(
    propsFindAllProperties
  );
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
            columns={columnsProperties}
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
