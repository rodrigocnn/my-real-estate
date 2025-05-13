import { PiTrash } from "react-icons/pi";

import { CustomModal } from "@/components/Modal";
import { useDeleteRentalPayment } from "../hooks/useDeleteRentalPayment";

export function DeleteRentalPaymentButton(row: any) {
  const { handleDelete, openModal, setOpenModal, deleteRentalPayment } =
    useDeleteRentalPayment();

  return (
    <>
      <CustomModal
        title="Excluir Pagamento"
        show={openModal}
        onClose={() => setOpenModal(false)}
        primaryAction={{
          label: "Sim",
          onClick: () => {
            deleteRentalPayment();
            setOpenModal(false);
          },
        }}
      >
        <p>Deseja realmente excluir o pagamento selecionado?</p>
      </CustomModal>

      <button
        onClick={() => handleDelete(row.row)}
        className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
      >
        <PiTrash className="text-xl text-red-500" />
      </button>
    </>
  );
}
