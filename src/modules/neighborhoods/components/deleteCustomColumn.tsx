import { PiTrash } from "react-icons/pi";

import { CustomModal } from "@/components/Modal";
import { useNeighborhoodDelete } from "../hooks/useNeighborhoodDelete";

export function DeleteCustomColumn(row: any) {
  const { handleDelete, openModal, setOpenModal, deleteNeighborhood } =
    useNeighborhoodDelete();

  return (
    <>
      <CustomModal
        title="Excluir Bairro"
        show={openModal}
        onClose={() => setOpenModal(false)}
        primaryAction={{
          label: "Sim",
          onClick: () => {
            deleteNeighborhood();
            setOpenModal(false);
          },
        }}
      >
        <p> Deseja realmente excluir o bairro selecionada?</p>
      </CustomModal>

      <button
        onClick={() => handleDelete(row.row)} // Chame a função de edição passando o ID
        className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
      >
        <PiTrash className="text-xl text-red-500" />
      </button>
    </>
  );
}
