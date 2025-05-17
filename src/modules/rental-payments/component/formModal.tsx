import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { Contract } from "@/modules/contracts/interfaces";
import { useModalRentalPayment } from "../hooks/useModalRentalPayment";
import { RentalPayment } from "../interfaces";
import { CurrencyInput } from "@/components/admin/InputCurrency";

interface FormRentalPaymentProps {
  contract: Contract;
  handleDateChange: (name: string, value: Date | null) => void;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleChangeCurrency: (name: string, value: number | undefined) => void;
  form: RentalPayment;
}

export function FormRentalPaymentModal(props: FormRentalPaymentProps) {
  const {
    contract,
    form,
    handleChange,
    handleSubmit,
    handleDateChange,
    handleChangeCurrency,
  } = props;

  return (
    <div className="bg-white  rounded">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="rentalContractId" value="Contrato de Aluguel" />
            <TextInput
              onChange={handleChange}
              name="rentalContractId"
              id="rentalContractId"
              value={props.contract?.id}
              required
              disabled
            />
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

            <div className="w-full">
              <Label htmlFor="payment_date" value="Data de Pagamento" />
              <Datepicker
                language="pt-BR"
                labelTodayButton="Hoje"
                labelClearButton="Limpar"
                name="payment_date"
                value={form.payment_date ? (form.payment_date as Date) : null}
                onChange={(date) => handleDateChange("payment_date", date)}
              />
            </div>
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
                value={"Pendente"}
                onChange={handleChange}
                required
                disabled
              >
                <option value="">Selecione</option>
                <option value="Pendente">Pendente</option>
                <option value="Pago">Pago</option>
              </Select>
            </div>
          </div>

          <div>
            <Button type="submit">Cadastrar Pagamento</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
