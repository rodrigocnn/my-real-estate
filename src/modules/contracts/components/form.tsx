import { Button, Datepicker, Label, Select, TextInput } from "flowbite-react";
import { useFormContract } from "../hooks/useFormContract";
import { CurrencyInput } from "@/components/admin/InputCurrency";

interface FormContractProps {
  edit?: boolean;
  initialData?: any;
}

export function FormContract(props: FormContractProps) {
  const initialData = props.initialData || [];

  const {
    form,
    handleChange,
    handleSubmit,
    clients,
    properties,
    dateFormContract,
    handleChangeCurrency,
    handleDateChange,
  } = useFormContract(initialData, props.edit);

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

              <Datepicker
                language="pt-BR"
                labelTodayButton="Hoje"
                labelClearButton="Limpar"
                name="startDate"
                onChange={(date) => handleDateChange("startDate", date)}
                value={dateFormContract?.startDate}
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="dataFim" value="Data Fim" />
              <Datepicker
                language="pt-BR"
                labelTodayButton="Hoje"
                labelClearButton="Limpar"
                name="endDate"
                onChange={(date) => handleDateChange("endDate", date)}
                value={dateFormContract?.endDate}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <CurrencyInput
                name="depositAmount"
                id="deposito"
                label="Depósito"
                value={form.depositAmount}
                onChange={handleChangeCurrency}
                required
              />
            </div>

            <div className="w-full">
              <CurrencyInput
                name="monthlyRent"
                id="valor"
                label="Valor Pago"
                value={form.monthlyRent}
                onChange={handleChangeCurrency}
                required
              />
            </div>
          </div>

          <div className="w-full mb-4">
            <Label htmlFor="status" value="Status" />
            <TextInput
              disabled
              type="text"
              name="status"
              id="status"
              placeholder="Ativo"
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
