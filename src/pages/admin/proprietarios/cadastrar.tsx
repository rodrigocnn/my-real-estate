import LayoutAdmin from "@/components/LayoutAdmin";
import { FormClient } from "@/modules/clients/component/form";

export default function ProprietariosCadastrar() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Proprietário</h2>
      <FormClient />
    </LayoutAdmin>
  );
}
