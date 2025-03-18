import LayoutAdmin from "@/components/LayoutAdmin";
import { Table } from "flowbite-react";

export default function Imoveis() {
  const data = [
    { id: 1, nome: "João", idade: 30, cidade: "São Paulo" },
    { id: 2, nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { id: 3, nome: "Carlos", idade: 35, cidade: "Belo Horizonte" },
  ];
  return (
    <LayoutAdmin>
      <div className="bg-white p-4 rounded h-screen ">
        <div className="overflow-x-auto">
          <Table striped className="border border-gray-300">
            <Table.Head className="border-b border-gray-300">
              <Table.HeadCell className="border-r border-gray-300">
                ID
              </Table.HeadCell>
              <Table.HeadCell className="border-r border-gray-300">
                Nome
              </Table.HeadCell>
              <Table.HeadCell className="border-r border-gray-300">
                Idade
              </Table.HeadCell>
              <Table.HeadCell className="border-r border-gray-300">
                Cidade
              </Table.HeadCell>
              <Table.HeadCell className="border-r border-gray-300">
                Editar
              </Table.HeadCell>
              <Table.HeadCell className="border-r border-gray-300">
                Excluir
              </Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {data.map((item) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b border-gray-300"
                  key={item.id}
                >
                  <Table.Cell className="border-r border-gray-300">
                    {item.id}
                  </Table.Cell>

                  <Table.Cell className="border-r border-gray-300">
                    {item.nome}
                  </Table.Cell>

                  <Table.Cell className="border-r border-gray-300">
                    {item.idade}
                  </Table.Cell>

                  <Table.Cell className="border-r border-gray-300">
                    {item.cidade}
                  </Table.Cell>

                  <Table.Cell className="border-r border-gray-300">
                    editar
                  </Table.Cell>

                  <Table.Cell className="border-r border-gray-300">
                    excluir
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </LayoutAdmin>
  );
}
