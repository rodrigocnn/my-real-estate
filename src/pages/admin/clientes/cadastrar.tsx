import LayoutAdmin from "@/components/LayoutAdmin";
import { FormClient } from "@/modules/clients/component/form";

export default function ClientesCadastrar() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Cliente</h2>
      <FormClient />
    </LayoutAdmin>
  );
}
