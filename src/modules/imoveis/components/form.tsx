import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useFormProperty } from "../hooks/useFormProperty";

interface FormPropertyProps {
  edit?: boolean;
  initialData?: any;
}

export function FormProperty(props: FormPropertyProps) {
  const initialData = props.initialData || [];

  const { form, handleChange, handleSubmit } = useFormProperty(
    initialData,
    props.edit
  );

  return (
    <div className="bg-white p-4 rounded">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-gray-200 p-2 mb-4">
            <h2>Geral</h2>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="titulo" value="Título" />
              <TextInput
                onChange={handleChange}
                name="title"
                id="titulo"
                value={form.title}
                required
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="tipoNegociacao" value="Tipo de Negociação" />
              <Select
                onChange={handleChange}
                name="negotiationType"
                id="tipoNegociacao"
                value={form.negotiationType}
                required
              >
                <option value="">Selecione</option>
                <option value="RENT">Alugar</option>
                <option value="SALE">Venda</option>
              </Select>
            </div>
          </div>

          {/* Descrição */}
          <div className="w-full mb-4">
            <Label htmlFor="descricao" value="Descrição" />
            <Textarea
              onChange={handleChange}
              name="description"
              id="descricao"
              rows={4}
              value={form.description}
              required
            />
          </div>

          <div className="w-full mb-4">
            <Label htmlFor="preco" value="Preço" />
            <TextInput
              onChange={handleChange}
              name="price"
              id="endereco"
              value={form.price?.toString()}
              required
            />
          </div>

          <div className="w-full bg-gray-200 p-2 mt-4 mb-4">
            <h2>Características</h2>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="quartos" value="Quartos" />
              <Select
                onChange={handleChange}
                name="bedrooms"
                id="quartos"
                value={form.bedrooms?.toString()}
                required
              >
                <option value="">Selecione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="banheiros" value="Banheiros" />
              <Select
                onChange={handleChange}
                name="bathrooms"
                id="banheiros"
                value={form.bathrooms?.toString()}
                required
              >
                <option value="">Selecione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="suites" value="Suítes" />
              <Select
                onChange={handleChange}
                name="suites"
                id="suites"
                value={form.suites?.toString()}
                required
              >
                <option value="">Selecione</option>
                <option value="0">Nenhuma</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </Select>
            </div>
          </div>

          <div className="w-full bg-gray-200 p-2 mt-4 mb-4">
            <h2>Localização</h2>
          </div>

          <div className="w-full mb-4">
            <Label htmlFor="endereco" value="Endereço" />
            <TextInput
              onChange={handleChange}
              name="address"
              id="endereco"
              value={form.address}
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="bairro" value="Bairro" />
              <Select
                onChange={handleChange}
                name="neighborhood"
                id="bairro"
                value={form?.neighborhood}
                required
              >
                <option value="">Selecione Bairro</option>
                <option value="centro">Centro</option>
                <option value="zona-sul">Zona Sul</option>
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="cidade" value="Cidade" />
              <Select
                onChange={handleChange}
                name="cityId"
                id="cidade"
                value={form.cityId}
                required
              >
                <option value="">Selecione Cidade</option>
                <option value="sp">São Paulo</option>
                <option value="rj">Rio de Janeiro</option>
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="estado" value="Estado" />
              <Select
                onChange={handleChange}
                name="state"
                id="estado"
                value={form.state}
                required
              >
                <option value="">Selecione Estado</option>

                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Select>
            </div>
          </div>

          {/* Localização Latitude / Longitude */}
          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label htmlFor="latitude" value="Latitude" />
              <TextInput
                type="number"
                step="any"
                onChange={handleChange}
                name="latitude"
                id="latitude"
                value={form.latitude?.toString()}
                required
              />
            </div>

            <div className="w-full">
              <Label htmlFor="longitude" value="Longitude" />
              <TextInput
                type="number"
                step="any"
                onChange={handleChange}
                name="longitude"
                id="longitude"
                value={form.longitude?.toString()}
                required
              />
            </div>
          </div>

          <div className="col-span-2">
            <Button type="submit">
              {props.edit ? "Atualizar" : "Cadastrar"} Imóvel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
