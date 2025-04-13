import { Select, TextInput } from "flowbite-react";

import { DataGrid } from "@/components/admin/Datagrid";
import { EditCustomColumn } from "@/modules/cidades/component/editCustomColumn";
import { DeleteCustomColumn } from "@/modules/neighborhoods/components/deleteCustomColumn";
import { useCreateNeighborhood } from "@/modules/neighborhoods/hooks/useCreateNeighborhood";
import { CustomModal } from "@/components/Modal";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { propsFindAllNeighborhood } from "@/modules/neighborhoods/constants";
import { Neighborhood } from "@/modules/neighborhoods/interfaces";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function Bairros() {
  const { data: neighborhoods } = useFindAllQuery<Neighborhood>(
    propsFindAllNeighborhood
  );

  const {
    handleClick,
    setOpenModal,
    openModal,
    createtNeighborhood,
    neighborhood,
    handleChange,
  } = useCreateNeighborhood();

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <CustomModal
          title="Cadastrar Bairro"
          show={openModal}
          onClose={() => setOpenModal(false)}
          primaryAction={{
            label: "Salvar",
            onClick: () => {
              createtNeighborhood();
              setOpenModal(false);
            },
          }}
        >
          <TextInput
            id="cidade"
            name="name"
            type="text"
            placeholder="Nome da Cidade"
            required
            value={neighborhood?.name}
            onChange={handleChange}
          />
          <Select name="cityId" onChange={handleChange} id="cities" required>
            <option value={"-1"}>Selecione Cidade</option>
            <option value={"cm81lz9sb0000whr1992adrln"}>Barreiras</option>
          </Select>
        </CustomModal>

        <div className="overflow-x-auto">
          <DataGrid
            rows={neighborhoods}
            columns={[
              {
                headerName: "Bairros",
                field: "name",
              },
            ]}
            addAction={{
              label: "Cadastrar Bairro",
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
