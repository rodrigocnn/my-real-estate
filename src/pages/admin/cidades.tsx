import { DataGrid } from "@/components/admin/Datagrid";

import { DeleteCustomColumn } from "@/modules/cidades/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/cidades/component/editCustomColumn";

import { TextInput } from "flowbite-react";
import { useCreateCity } from "@/modules/cidades/hooks/useCreateCity";
import { CustomModal } from "@/components/Modal";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useCitiesFindAll } from "@/modules/cidades/hooks/useCityQuery";

const columns = [
  {
    headerName: "Cidades",
    field: "name",
  },
];

export default function Cidades() {
  const { cities } = useCitiesFindAll();
  const {
    openModal,
    setOpenModal,
    createCity,
    city,
    handleChange,
    handleClick,
  } = useCreateCity();

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <CustomModal
          title="Cadastrar Cidade"
          show={openModal}
          onClose={() => setOpenModal(false)}
          primaryAction={{
            label: "Salvar",
            onClick: () => {
              createCity();
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
            value={city?.name}
            onChange={handleChange}
          />
        </CustomModal>

        <div className="overflow-x-auto">
          <DataGrid
            rows={cities}
            columns={columns}
            addAction={{
              label: "Cadastrar Cidade",
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
