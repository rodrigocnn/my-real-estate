import { Button, Datepicker, Label, Select, TextInput } from "flowbite-react";
import { useFormContract } from "../hooks/useFormContract";
import { CurrencyInput } from "@/components/admin/InputCurrency";
import { useEffect } from "react";

interface FormContractProps {
  edit?: boolean;
  initialData?: any;
}

export function FormContract(props: FormContractProps) {
  const { initialData, edit } = props;

  const {
    form,
    setForm,
    handleChange,
    handleSubmit,
    clients,
    properties,
    handleChangeCurrency,
    handleDateChange,
  } = useFormContract(edit);

  useEffect(() => {
    if (initialData && edit) {
      const formMapped = {
        ...initialData,
        start_date: initialData.start_date
          ? new Date(initialData.start_date)
          : null,
        end_date: initialData.end_date ? new Date(initialData.end_date) : null,
      };
      setForm(formMapped);
    }
  }, [initialData, edit]);

  return (
    <div className="bg-white p-4 rounded">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="cliente" value="Cliente" />
              <Select
                onChange={handleChange}
                name="client_id"
                id="cliente"
                value={form.client_id}
              >
                <option value="">Selecione Cliente</option>
                {clients?.map((cliente) => {
                  return <option value={cliente.id}>{cliente.name}</option>;
                })}
              </Select>
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="Imovel" value="Imovel" />
              <Select
                onChange={handleChange}
                name="property_id"
                id="Imovel"
                value={form.property_id}
              >
                <option value="">Selecione Imóvel</option>
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
                name="start_date"
                onChange={(date) => handleDateChange("start_date", date)}
                value={form.start_date as Date}
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="dataFim" value="Data Fim" />
              <Datepicker
                language="pt-BR"
                labelTodayButton="Hoje"
                labelClearButton="Limpar"
                name="end_date"
                onChange={(date) => handleDateChange("end_date", date)}
                value={form.end_date as Date}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <CurrencyInput
                name="deposit_amount"
                id="deposito"
                label="Depósito"
                value={form.deposit_amount}
                onChange={handleChangeCurrency}
              />
            </div>

            <div className="w-full">
              <CurrencyInput
                name="monthly_rent"
                id="valor"
                label="Valor do Contrato"
                value={form.monthly_rent}
                onChange={handleChangeCurrency}
              />
            </div>
          </div>

          <div className="w-full mb-4">
            <Label htmlFor="status" value="Status" />

            <Select
              onChange={handleChange}
              name="status"
              id="status"
              value={form.status}
              disabled={!edit}
            >
              <option value="">Selecione Status</option>
              <option value="ativo">Ativo</option>;
              <option value="inativo">Inativo</option>;
            </Select>
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
