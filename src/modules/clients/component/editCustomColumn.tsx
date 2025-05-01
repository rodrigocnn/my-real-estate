import { FaEdit } from "react-icons/fa";

import { useEditCustomColum } from "../hooks/useEditCustomColumn";

export function EditCustomColumn(row: any) {
  const { handleEdit } = useEditCustomColum();

  return (
    <button
      onClick={() => handleEdit(row.row)}
      className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
    >
      <FaEdit className="text-xl text-gray-400 cursor-pointer" />
    </button>
  );
}
