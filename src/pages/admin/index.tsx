import LayoutAdmin from "@/components/LayoutAdmin";

export default function Admin() {
  return (
    <LayoutAdmin>
      {/* Aqui vai o conteúdo específico de cada página */}
      <h2 className="text-2xl font-semibold">
        Bem-vindo à Área Administrativa
      </h2>
      <p>Gerencie cidades, bairros, imóveis e usuários aqui.</p>
    </LayoutAdmin>
  );
}
