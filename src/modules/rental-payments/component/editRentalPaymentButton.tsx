import { FaEdit } from "react-icons/fa";
import { useEditRentalPayment } from "../hooks/useEditRentalPayment";

export function EditRentalPaymentButton(row: any) {
  const { handleEdit } = useEditRentalPayment();

  return (
    <button
      onClick={() => handleEdit(row.row)}
      className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
    >
      <FaEdit className="text-xl text-gray-400 cursor-pointer" />
    </button>
  );
}
