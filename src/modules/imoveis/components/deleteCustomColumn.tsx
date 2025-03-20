import { PiTrash } from "react-icons/pi";

import { CustomModal } from "@/components/Modal";
import { useDeleteCustomColum } from "../hooks/useDeleteCustomColumn";

export function DeleteCustomColumn(row: any) {
  const { handleDelete, openModal, setOpenModal, deleteCity } =
    useDeleteCustomColum();

  return (
    <>
      <CustomModal
        title="Excluir Cidade"
        show={openModal}
        onClose={() => setOpenModal(false)}
        primaryAction={{
          label: "Sim",
          onClick: () => {
            deleteCity();
            setOpenModal(false);
          },
        }}
      >
        <p> Deseja realmente excluir o imóvel selecionado?</p>
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
