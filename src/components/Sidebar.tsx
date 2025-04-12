import {
  MdOutlineDashboard,
  MdOutlineLocationCity,
  MdOutlineRealEstateAgent,
  MdOutlineHouseSiding,
} from "react-icons/md";

import { FaUserFriends } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";

import ItemSidebar from "./ItemSidebar";

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="flex justify-center py-6">
        <span> Antonio Imóveis </span>
      </div>
      <nav className="mt-4">
        <ul>
          <ItemSidebar
            href="/admin"
            Icon={<MdOutlineDashboard className="text-xl" />}
            label="Dashboard"
          />
          <ItemSidebar
            href="/admin/cidades"
            Icon={<MdOutlineHouseSiding className="text-xl" />}
            label="Proprietários"
          />

          <ItemSidebar
            href="/admin/clientes"
            Icon={<FaUserFriends className="text-xl" />}
            label="Clientes"
          />

          <ItemSidebar
            href="/admin/cidades"
            Icon={<HiOutlineDocumentText className="text-xl" />}
            label="Contratos"
          />

          <ItemSidebar
            href="/admin/cidades"
            Icon={<BsCashStack className="text-xl" />}
            label="Lançamentos"
          />

          <ItemSidebar
            href="/admin/cidades"
            Icon={<MdOutlineLocationCity className="text-xl" />}
            label="Cidades"
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
