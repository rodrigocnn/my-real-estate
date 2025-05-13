import { DataGrid } from "@/components/admin/Datagrid";
import { DeleteCustomColumn } from "@/modules/cidades/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/cidades/component/editCustomColumn";
import { TextInput } from "flowbite-react";
import { useCreateCity } from "@/modules/cidades/hooks/useCreateCity";
import { CustomModal } from "@/components/Modal";
import LayoutAdmin from "@/components/LayoutAdmin";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { citiesFindAll } from "@/modules/cidades/api/cityApi";
import { Cidade } from "@/modules/cidades/interfaces";
import { Spinner } from "flowbite-react";

const columns = [
  {
    headerName: "Cidades",
    field: "name",
  },
];

export default function Cidades() {
  const props = {
    queryKey: "get-cities",
    queryFn: citiesFindAll,
  };

  const { data: cities, isLoading } = useFindAllQuery<Cidade>(props);

  const {
    openModal,
    setOpenModal,
    handleCloseModal,
    createCity,
    city,
    errors,
    handleChange,
    handleClick,
  } = useCreateCity();

  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner aria-label="Carregando cidades..." />
          </div>
        ) : (
          <>
            <CustomModal
              title="Cadastrar Cidade"
              show={openModal}
              onClose={() => handleCloseModal()}
              primaryAction={{
                label: "Salvar",
                onClick: () => {
                  createCity();
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
              {errors.name && <p className="text-red-500">{errors.name}</p>}{" "}
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
          </>
        )}
      </div>
    </LayoutAdmin>
  );
}
