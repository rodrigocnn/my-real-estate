import LayoutAdmin from "@/components/LayoutAdmin";
import { FormOwner } from "@/modules/owner/component/form";

export default function ProprietariosCadastrar() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Proprietário</h2>
      <FormOwner />
    </LayoutAdmin>
  );
}
