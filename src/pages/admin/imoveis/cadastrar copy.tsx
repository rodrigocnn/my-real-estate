import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";

import LayoutAdmin from "@/components/LayoutAdmin";

import { Table } from "flowbite-react";

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
          <form className="grid grid-cols-2 gap-6">
            {/* Coluna da esquerda */}
            <div className="space-y-4">
              {/* Tipo de Negociação */}
              <div>
                <Label htmlFor="tipoNegociacao" value="Tipo de Negociação" />
                <Select name="tipoNegociacao" id="tipoNegociacao" required>
                  <option value="">Selecione</option>
                  <option value="alugar">Alugar</option>
                  <option value="venda">Venda</option>
                </Select>
              </div>
              {/* Título */}
              <div>
                <Label htmlFor="titulo" value="Título" />
                <TextInput name="titulo" id="titulo" required />
              </div>

              {/* Descrição */}
              <div>
                <Label htmlFor="descricao" value="Descrição" />
                <Textarea name="descricao" id="descricao" rows={4} required />
              </div>

              {/* Galeria */}
              <div>
                <Label htmlFor="galeria" value="Galeria de Imagens" />
                <FileInput name="galeria" id="galeria" multiple required />
              </div>
            </div>

            {/* Coluna da direita */}
            <div className="space-y-4">
              {/* Quartos */}
              <div>
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
              <div>
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
              <div>
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

            {/* Botão de envio (ocupa 2 colunas) */}
            <div className="col-span-2">
              <Button type="submit">Cadastrar Imóvel</Button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
}
