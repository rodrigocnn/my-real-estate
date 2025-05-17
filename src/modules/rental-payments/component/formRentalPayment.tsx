import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { useFormRentalPayment } from "../hooks/useFormRentalPayment";
import { useEffect } from "react";
import { RentalPayment } from "../interfaces";
import { Contract } from "@/modules/contracts/interfaces";
import { CurrencyInput } from "@/components/admin/InputCurrency";

interface FormRentalPaymentProps {
  edit?: boolean;
  initialData?: RentalPayment;
  contract?: Contract;
  constracts?: Contract[];
}

export function FormRentalPayment(props: FormRentalPaymentProps) {
  const { initialData, contract, edit, constracts } = props;

  const {
    form,
    handleChange,
    handleSubmit,
    setForm,
    handleDateChange,
    handleChangeCurrency,
  } = useFormRentalPayment(initialData, edit, contract);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm(initialData);
    }
  }, [initialData]);

  return (
    <div className="bg-white  rounded">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <Label htmlFor="contrato" value="Contrato" />
            <Select
              id="contrato"
              name="rental_contract_id"
              value={form.rental_contract_id}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              {constracts?.map((contract) => {
                return <option value={contract.id}>{contract.id}</option>;
              })}
            </Select>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label htmlFor="dueDate" value="Data de Vencimento" />

              <Datepicker
                language="pt-BR"
                labelTodayButton="Hoje"
                labelClearButton="Limpar"
                name="due_date"
                value={form.due_date ? (form.due_date as Date) : null}
                onChange={(date) => handleDateChange("due_date", date)}
              />
            </div>

            {edit && (
              <div className="w-full">
                <Label htmlFor="payment_date" value="Data de Pagamento" />
                <Datepicker
                  language="pt-BR"
                  labelTodayButton="Hoje"
                  labelClearButton="Limpar"
                  name="payment_date"
                  value={form.payment_date as Date}
                  onChange={(date) => handleDateChange("payment_date", date)}
                />
              </div>
            )}
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <CurrencyInput
                name="amount"
                id="amount"
                label="Valor (R$)"
                value={form.amount}
                onChange={handleChangeCurrency}
              />
            </div>

            <div className="w-full">
              <Label htmlFor="status" value="Status do Pagamento" />
              <Select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="Pendente">Pendente</option>
                <option value="Pago">Pago</option>
              </Select>
            </div>
          </div>

          <div>
            <Button type="submit">
              {props.edit ? "Atualizar" : "Cadastrar"} Pagamento
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
