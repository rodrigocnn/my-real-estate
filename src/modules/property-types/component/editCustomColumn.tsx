import { FaEdit } from "react-icons/fa";

import { useEditCustomColum } from "../hooks/useEditCustomColumn";
import { CustomModal } from "@/components/Modal";
import { TextInput } from "flowbite-react";

export function EditCustomColumn(row: any) {
  const {
    handleEdit,
    handleChange,
    openModal,
    setOpenModal,
    updatePropertyType,
    propertyType,
  } = useEditCustomColum();

  return (
    <>
      <CustomModal
        title="Atualizar Tipo de Imóvel"
        show={openModal}
        onClose={() => setOpenModal(false)}
        primaryAction={{
          label: "Atualizar",
          onClick: () => {
            updatePropertyType();
            setOpenModal(false);
          },
        }}
      >
        <div>
          <TextInput
            id="tipo"
            name="name"
            type="text"
            placeholder="Tipo de Imóvel"
            required
            value={propertyType?.name}
            onChange={handleChange}
          />
        </div>
      </CustomModal>

      <button
        onClick={() => handleEdit(row.row)}
        className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
      >
        <FaEdit className="text-xl text-gray-400 cursor-pointer" />
      </button>
    </>
  );
}
