import { FaEdit } from "react-icons/fa";

import { useEditOwnerColumn } from "../hooks/useEditOwnerColumn";

export function EditCustomColumn(row: any) {
  const { handleEdit } = useEditOwnerColumn();

  return (
    <button
      onClick={() => handleEdit(row.row)}
      className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
    >
      <FaEdit className="text-xl text-gray-400 cursor-pointer" />
    </button>
  );
}
