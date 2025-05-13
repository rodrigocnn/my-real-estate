import { DataGrid } from "@/components/admin/Datagrid";
import { DeleteCustomColumn } from "@/modules/property-types/component/deleteCustomColumn";
import { EditCustomColumn } from "@/modules/property-types/component/editCustomColumn";
import { TextInput } from "flowbite-react";
import { CustomModal } from "@/components/Modal";
import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { Spinner } from "flowbite-react";
import { PropertyType } from "@/modules/property-types/interfaces";
import { propertyTypesFindAll } from "@/modules/property-types/api";
import { useCreatePropertyType } from "@/modules/property-types/hooks/useCreatePropertyType";
import LayoutAdmin from "@/components/LayoutAdmin";

const columns = [
  {
    headerName: "Tipos de Imóvel",
    field: "name",
  },
];

export default function Tipos() {
  const props = {
    queryKey: "get-types",
    queryFn: propertyTypesFindAll,
  };

  const { data: property_types, isLoading } =
    useFindAllQuery<PropertyType>(props);

  const {
    openModal,
    handleCloseModal,
    createPropertyType,
    propertyType,
    errors,
    handleChange,
    handleClick,
  } = useCreatePropertyType();

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
              title="Cadastrar Tipo de Imóvel"
              show={openModal}
              onClose={() => handleCloseModal()}
              primaryAction={{
                label: "Salvar",
                onClick: () => {
                  createPropertyType();
                },
              }}
            >
              <TextInput
                id="cidade"
                name="name"
                type="text"
                placeholder="Tipo de Imóvel"
                required
                value={propertyType?.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}{" "}
            </CustomModal>

            <div className="overflow-x-auto">
              <DataGrid
                rows={property_types}
                columns={columns}
                addAction={{
                  label: "Cadastrar Tipo de Imóvel",
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
