import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";

import LayoutAdmin from "@/components/LayoutAdmin";

export default function ImoveisCadastrar() {
  const data = [
    { id: 1, nome: "João", idade: 30, cidade: "São Paulo" },
    { id: 2, nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { id: 3, nome: "Carlos", idade: 35, cidade: "Belo Horizonte" },
  ];
  return (
    <LayoutAdmin>
      {/* Aqui vai o conteúdo específico de cada página */}
      <h2 className="text-2xl font-semibold">Cadastro de Imóvel</h2>

      <div className="bg-white p-4 rounded h-screen">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <form>
            <div className=" w-full bg-gray-200 p-2 mb-4">
              <h2>Geral</h2>
            </div>

            <div className="flex gap-4">
              <div className="w-full mb-4">
                <Label htmlFor="titulo" value="Título" />
                <TextInput name="titulo" id="titulo" required />
              </div>

              <div className="w-full mb-4">
                <Label htmlFor="tipoNegociacao" value="Tipo de Negociação" />
                <Select name="tipoNegociacao" id="tipoNegociacao" required>
                  <option value="">Selecione</option>
                  <option value="alugar">Alugar</option>
                  <option value="venda">Venda</option>
                </Select>
              </div>
            </div>

            {/* Descrição */}
            <div>
              <Label htmlFor="descricao" value="Descrição" />
              <Textarea name="descricao" id="descricao" rows={4} required />
            </div>

            <div className=" w-full bg-gray-200 p-2 mt-4 mb-4">
              <h2>Características</h2>
            </div>

            <div className="flex gap-4">
              <div className="w-full mb-4">
                <Label htmlFor="quartos" value="Quartos" />
                <Select name="quartos" id="quartos" required>
                  <option value="">Selecione</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </Select>
              </div>

              {/* Banheiros */}
              <div className="w-full mb-4">
                <Label htmlFor="banheiros" value="Banheiros" />
                <Select name="banheiros" id="banheiros" required>
                  <option value="">Selecione</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </Select>
              </div>

              {/* Suítes */}
              <div className="w-full mb-4">
                <Label htmlFor="suites" value="Suítes" />
                <Select name="suites" id="suites" required>
                  <option value="">Selecione</option>
                  <option value="0">Nenhuma</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </Select>
              </div>
            </div>

            <div className=" w-full bg-gray-200 p-2 mt-4 mb-4">
              <h2>Localização</h2>
            </div>

            <div className="flex gap-4">
              {/* Cidade */}
              <div className="w-full mb-4">
                <Label htmlFor="cidade" value="Cidade" />
                <Select name="cidade" id="cidade" required>
                  <option value="">Selecione</option>
                  <option value="sp">São Paulo</option>
                  <option value="rj">Rio de Janeiro</option>
                </Select>
              </div>

              {/* Bairro */}
              <div className="w-full mb-4">
                <Label htmlFor="bairro" value="Bairro" />
                <Select name="bairro" id="bairro" required>
                  <option value="">Selecione</option>
                  <option value="centro">Centro</option>
                  <option value="zona-sul">Zona Sul</option>
                </Select>
              </div>
            </div>

            {/* Localização */}
            <div className="w-full mb-4">
              <Label htmlFor="localizacao" value="Localização" />
              <TextInput name="localizacao" id="localizacao" required />
            </div>

            <div className="col-span-2">
              <Button type="submit">Cadastrar Imóvel</Button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
}
