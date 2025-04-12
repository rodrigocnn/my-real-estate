import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useFormContract } from "../hooks/useFormContract";
import { useClientsFindAll } from "@/modules/clients/hooks/useClientQuery";

interface FormContractProps {
  edit?: boolean;
  initialData?: any;
}

export function FormContract(props: FormContractProps) {
  const initialData = props.initialData || [];

  const { form, handleChange, handleSubmit, clients, properties } =
    useFormContract(initialData, props.edit);

  return (
    <div className="bg-white p-4 rounded">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="cliente" value="Cliente" />
              <Select
                onChange={handleChange}
                name="clientId"
                id="cliente"
                value={form.clientId}
                required
              >
                {clients?.map((cliente) => {
                  return <option value={cliente.id}>{cliente.name}</option>;
                })}
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="Imovel" value="Imovel" />
              <Select
                onChange={handleChange}
                name="propertyId"
                id="tipoNegociacao"
                value={form.propertyId}
                required
              >
                {properties?.map((imovel) => {
                  return <option value={imovel.id}>{imovel.title}</option>;
                })}
              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="dataInicio" value="Data Início" />
              <TextInput
                onChange={handleChange}
                name="startDate"
                id="dataInicio"
                value={form.startDate}
                required
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="dataFim" value="Data Fim" />
              <TextInput
                onChange={handleChange}
                name="endDate"
                id="dataFim"
                value={form.endDate}
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label htmlFor="deposito" value="Depósito" />
              <TextInput
                type="number"
                step="any"
                onChange={handleChange}
                name="depositAmount"
                id="deposito"
                value={form.depositAmount?.toString()}
                required
              />
            </div>

            <div className="w-full">
              <Label htmlFor="valor" value="Valor Pago" />
              <TextInput
                type="number"
                step="any"
                onChange={handleChange}
                name="monthlyRent"
                id="valor"
                value={form.monthlyRent?.toString()}
                required
              />
            </div>
          </div>

          <div className="w-full mb-4">
            <Label htmlFor="status" value="Status" />
            <TextInput
              disabled
              type="text"
              onChange={handleChange}
              name="status"
              id="status"
              value={"active"}
              placeholder="Ativo"
              required
            />
          </div>

          <div className="col-span-2">
            <Button type="submit">
              {props.edit ? "Atualizar" : "Cadastrar"} Contrato
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
