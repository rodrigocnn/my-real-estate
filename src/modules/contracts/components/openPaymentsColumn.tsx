import { BsCashStack } from "react-icons/bs";

import { CustomModal } from "@/components/Modal";
import { useDeleteCustomColum } from "../hooks/useDeleteCustomColumn";

import ShowPayments from "@/modules/rental-payments/component/showPayments";

export function OpenPaymentsColumn(row: any) {
  const { handleDelete, openModal, setOpenModal, deleteCity } =
    useDeleteCustomColum();

  return (
    <>
      <CustomModal
        size="6xl"
        title="Pagamentos"
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
        <ShowPayments />
      </CustomModal>

      <button
        onClick={() => handleDelete(row.row)}
        className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
      >
        <BsCashStack className="text-xl text-gray-400 cursor-pointer" />
      </button>
    </>
  );
}
