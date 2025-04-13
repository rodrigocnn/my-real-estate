import { FaEdit } from "react-icons/fa";

import { CustomModal } from "@/components/Modal";
import { TextInput } from "flowbite-react";
import { useNeighborhoodEdit } from "../hooks/useNeighborhoodEdit";

export function EditCustomColumn(row: any) {
  const {
    handleEdit,
    handleChange,
    openModal,
    setOpenModal,
    updateNeighborhood,
    neighborhood,
  } = useNeighborhoodEdit();

  return (
    <>
      <CustomModal
        title="Atualizar Bairro"
        show={openModal}
        onClose={() => setOpenModal(false)}
        primaryAction={{
          label: "Atualizar",
          onClick: () => {
            updateNeighborhood();
            setOpenModal(false);
          },
        }}
      >
        <div>
          <TextInput
            id="bairro"
            name="name"
            type="text"
            placeholder="Nome do Bairro"
            required
            value={neighborhood?.name}
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
