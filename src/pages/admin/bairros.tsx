import { Select, TextInput } from "flowbite-react";

import { DataGrid } from "@/components/admin/Datagrid";

import { DeleteCustomColumn } from "@/modules/neighborhoods/components/deleteCustomColumn";
import { useCreateNeighborhood } from "@/modules/neighborhoods/hooks/useCreateNeighborhood";
import { CustomModal } from "@/components/Modal";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { propsFindAllNeighborhood } from "@/modules/neighborhoods/constants";
import { Neighborhood } from "@/modules/neighborhoods/interfaces";
import LayoutAdmin from "@/components/LayoutAdmin";
import { EditCustomColumn } from "@/modules/neighborhoods/components/editCustomColumn";

export default function Bairros() {
  const { data: neighborhoods } = useFindAllQuery<Neighborhood>(
    propsFindAllNeighborhood
  );

  const {
    handleClick,
    setOpenModal,
    openModal,
    createNeighborhood,
    neighborhood,
    handleChange,
    errors,
    handleCloseModal,
  } = useCreateNeighborhood();

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <CustomModal
          title="Cadastrar Bairro"
          show={openModal}
          onClose={() => handleCloseModal()}
          primaryAction={{
            label: "Salvar",
            onClick: () => {
              createNeighborhood();
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
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <Select name="city_id" onChange={handleChange} id="cities" required>
            <option value={"-1"}>Selecione Cidade</option>
            <option value={1}>Barreiras</option>
          </Select>
          {errors.name && <p className="text-red-500">{errors.cityId}</p>}
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
