import LayoutAdmin from "@/components/LayoutAdmin";
import { FormProperty } from "@/modules/imoveis/components/form";

export default function ImoveisCadastrar() {
  return (
    <LayoutAdmin>
      <h2 className="text-2xl font-semibold  mb-4">Cadastro de Imóvel</h2>
      <FormProperty />
    </LayoutAdmin>
  );
}
