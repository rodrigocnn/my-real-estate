import { DataGrid } from "@/components/admin/Datagrid";

import { EditCustomColumn } from "@/modules/cidades/component/editCustomColumn";

import { DeleteCustomColumn } from "@/modules/neighborhoods/components/deleteCustomColumn";
import { useNeighborhoodFindAll } from "@/modules/neighborhoods/hooks/useNeighborhoodQuery";
import { useCreateNeighborhoodAction } from "@/modules/neighborhoods/hooks/useCreateNeighborhoodAction";
import LayoutAdmin from "@/components/LayoutAdmin";
import { CustomModal } from "@/components/Modal";
import { Select, TextInput } from "flowbite-react";

const columns = [
  {
    headerName: "Bairros",
    field: "name",
  },
];

export default function Bairros() {
  const { neighborhoods } = useNeighborhoodFindAll();

  const {
    handleClick,
    setOpenModal,
    openModal,
    createtNeighborhood,
    neighborhood,
    handleChange,
  } = useCreateNeighborhoodAction();

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
            columns={columns}
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
