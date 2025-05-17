import {
  MdOutlineDashboard,
  MdOutlineLocationCity,
  MdOutlineRealEstateAgent,
  MdOutlineHouseSiding,
} from "react-icons/md";

import {
  FaUserFriends,
  FaMapMarkedAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { HiOutlineDocumentText } from "react-icons/hi";
import { BsCashStack } from "react-icons/bs";

import { useState } from "react";
import ItemSidebar from "./ItemSidebar";

export function Sidebar() {
  const [configOpen, setConfigOpen] = useState(false);

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="flex justify-center py-6">
        <span className="pb-2 center border-b border-b-gray-700">
          Antonio Nunes - Sistema de Gestão de Imóveis{" "}
        </span>
      </div>
      <nav className="mt-4">
        <ul>
          <ItemSidebar
            href="/admin"
            Icon={<MdOutlineDashboard className="text-xl" />}
            label="Dashboard"
          />

          <ItemSidebar
            href="/admin/clientes"
            Icon={<FaUserFriends className="text-xl" />}
            label="Clientes"
          />

          <ItemSidebar
            href="/admin/proprietarios"
            Icon={<MdOutlineHouseSiding className="text-xl" />}
            label="Proprietários"
          />

          <ItemSidebar
            href="/admin/imoveis"
            Icon={<MdOutlineRealEstateAgent className="text-xl" />}
            label="Imóveis"
          />

          <ItemSidebar
            href="/admin/contratos"
            Icon={<HiOutlineDocumentText className="text-xl" />}
            label="Contratos"
          />
          <ItemSidebar
            href="/admin/pagamentos"
            Icon={<BsCashStack className="text-xl" />}
            label="Pagamentos"
          />

          {/* Menu de Configurações */}
          <li
            className="cursor-pointer px-4 py-2 hover:bg-gray-700 flex items-center justify-between"
            onClick={() => setConfigOpen(!configOpen)}
          >
            <div className="flex items-center gap-2">
              <MdOutlineLocationCity className="text-xl" />
              <span>Configurações</span>
            </div>
            {configOpen ? (
              <FaChevronUp className="text-sm" />
            ) : (
              <FaChevronDown className="text-sm" />
            )}
          </li>
          {configOpen && (
            <ul className="ml-6">
              <ItemSidebar
                href="/admin/cidades"
                Icon={<MdOutlineLocationCity className="text-sm" />}
                label="Cidades"
              />
              <ItemSidebar
                href="/admin/bairros"
                Icon={<FaMapMarkedAlt className="text-sm" />}
                label="Bairros"
              />
              <ItemSidebar
                href="/admin/usuarios"
                Icon={<FaUsers className="text-xl" />}
                label="Usuários"
              />
            </ul>
          )}
        </ul>
      </nav>
    </div>
  );
}
