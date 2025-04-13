import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { DeleteCustomColumn } from "@/modules/imoveis/components/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/imoveis/components/editCustomColumn";

import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Contract } from "@/modules/contracts/interfaces";
import { propsFindAllContract } from "@/modules/contracts/constants";
import { columnsContract } from "@/modules/contracts/constants/columns";

export default function Imoveis() {
  const { data: contracts } = useFindAllQuery<Contract>(propsFindAllContract);

  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/admin/contratos/cadastrar");
  }

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <DataGrid
            rows={contracts}
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
