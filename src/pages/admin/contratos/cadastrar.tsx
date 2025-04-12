import LayoutAdmin from "@/components/LayoutAdmin";
import { FormContract } from "@/modules/contracts/components/form";

export default function ContratoCadastrar() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Contrato</h2>
      <FormContract />
    </LayoutAdmin>
  );
}
