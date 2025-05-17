import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useFormProperty } from "../hooks/useFormProperty";
import { Owner } from "@/modules/owner/interfaces";
import { PropertyType } from "@/modules/property-types/interfaces";
import { useEffect } from "react";
import { CurrencyInput } from "@/components/admin/InputCurrency";

interface FormPropertyProps {
  edit?: boolean;
  initialData?: any;
  owners: Owner[] | [];
  types: PropertyType[] | [];
}

export function FormProperty(props: FormPropertyProps) {
  const { initialData, owners, types, edit } = props;
  const { form, handleChange, handleSubmit, setForm, handleChangeCurrency } =
    useFormProperty(edit);

  useEffect(() => {
    if (initialData && edit) {
      setForm(initialData);
    }
  }, [initialData]);

  return (
    <div className="bg-white p-4 rounded">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-gray-200 p-2 mb-4">
            <h2>Geral</h2>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="tipoImovel" value="Tipo de Imóvel" />
              <Select
                onChange={handleChange}
                name="property_type_id"
                id="tipoImovel"
                value={form.property_type_id}
              >
                <option value="">Selecione</option>
                {types.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="proprietario" value="Proprietário" />
              <Select
                onChange={handleChange}
                name="owner_id"
                id="proprietario"
                value={form.owner_id}
              >
                <option value="">Selecione</option>
                {owners.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="tipoNegociacao" value="Tipo de Negociação" />
              <Select
                onChange={handleChange}
                name="negotiation_type"
                id="tipoNegociacao"
                value={form.negotiation_type}
              >
                <option value="">Selecione</option>
                <option value="aluguel">Alugar</option>
                <option value="venda">Venda</option>
              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="titulo" value="Título" />
              <TextInput
                onChange={handleChange}
                name="title"
                id="titulo"
                value={form.title}
              />
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
            />
          </div>

          <div className="w-full mb-4">
            <CurrencyInput
              name="price"
              id="deposito"
              label="Preço"
              value={form.price}
              onChange={handleChangeCurrency}
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
                name="city_id"
                id="cidade"
                value={form.city_id}
              >
                <option value="">Selecione Cidade</option>
                <option value="1">Barreiras</option>
                <option value="2">Rio de Janeiro</option>
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="estado" value="Estado" />
              <Select
                onChange={handleChange}
                name="state"
                id="estado"
                value={form.state}
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
          {/* <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label htmlFor="latitude" value="Latitude" />
              <TextInput
                type="number"
                step="any"
                onChange={handleChange}
                name="latitude"
                id="latitude"
                value={form.latitude?.toString()}
               
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
               
              />
            </div>
          </div> */}

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
