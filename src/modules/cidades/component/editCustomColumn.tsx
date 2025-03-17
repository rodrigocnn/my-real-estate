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
    updateCity,
    city,
  } = useEditCustomColum();

  return (
    <>
      <CustomModal
        title="Atualizar Cidade"
        show={openModal}
        onClose={() => setOpenModal(false)}
        primaryAction={{
          label: "Atualizar",
          onClick: () => {
            updateCity();
            setOpenModal(false);
          },
        }}
      >
        <div>
          <TextInput
            id="cidade"
            name="name"
            type="text"
            placeholder="Nome da Cidade"
            required
            value={city?.name}
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
