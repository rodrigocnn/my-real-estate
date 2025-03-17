import {
  MdOutlineDashboard,
  MdOutlineLocationCity,
  MdOutlineRealEstateAgent,
} from "react-icons/md";

import { FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import ItemSidebar from "./ItemSidebar";

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="flex justify-center py-6">
        <span> Antonio Imóveis </span>
      </div>
      <nav className="mt-16">
        <ul>
          <ItemSidebar
            href="/admin"
            Icon={<MdOutlineDashboard className="text-xl" />}
            label="Dashboard"
          />
          <ItemSidebar
            href="/admin/cidades"
            Icon={<MdOutlineLocationCity className="text-xl" />}
            label="Cidade"
          />
          <ItemSidebar
            href="/admin/bairros"
            Icon={<FaMapMarkedAlt className="text-xl" />}
            label="Bairros"
          />
          <ItemSidebar
            href="/admin/imoveis"
            Icon={<MdOutlineRealEstateAgent className="text-xl" />}
            label="Imóveis"
          />
          <ItemSidebar
            href="/admin/usuarios"
            Icon={<FaUsers className="text-xl" />}
            label="Usuários"
          />
        </ul>
      </nav>
    </div>
  );
}
