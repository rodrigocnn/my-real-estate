import React, { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useAuthGuard } from "@/hooks/useAuthGuard";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const { isChecking } = useAuthGuard();

  if (isChecking) {
    return <div className="text-white p-6">Verificando autenticação...</div>;
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Área Administrativa</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Sair
          </button>
        </header>

        {/* Content Section */}
        <main className="flex-1 p-6 bg-gray-100 ">{children}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
