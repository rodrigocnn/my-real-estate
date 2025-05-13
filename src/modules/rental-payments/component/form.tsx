import { Button, Label, TextInput, Select } from "flowbite-react";
import { useFormRentalPayment } from "../hooks/useFormRentalPayment";
import { useEffect } from "react";
import { RentalPayment } from "../interfaces";

interface FormRentalPaymentProps {
  edit?: boolean;
  initialData?: RentalPayment;
}

export function FormRentalPayment(props: FormRentalPaymentProps) {
  const initialData = props.initialData;

  const { form, handleChange, handleSubmit, setForm } = useFormRentalPayment(
    initialData,
    props.edit
  );

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm(initialData);
    }
  }, [initialData]);

  return (
    <div className="bg-white  rounded">
      <div className="bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label
              htmlFor="rentalContractId"
              value="Contrato de Aluguel (ID)"
            />
            <TextInput
              onChange={handleChange}
              name="rentalContractId"
              id="rentalContractId"
              value={form.rentalContractId}
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label htmlFor="dueDate" value="Data de Vencimento" />
              <TextInput
                type="date"
                onChange={handleChange}
                name="dueDate"
                id="dueDate"
                value={form.dueDate?.slice(0, 10) || ""}
                required
              />
            </div>

            <div className="w-full">
              <Label htmlFor="paymentDate" value="Data de Pagamento" />
              <TextInput
                type="datetime-local"
                onChange={handleChange}
                name="paymentDate"
                id="paymentDate"
                value={form.paymentDate?.slice(0, 16) || ""}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <Label htmlFor="amount" value="Valor (R$)" />
              <TextInput
                type="number"
                step="0.01"
                onChange={handleChange}
                name="amount"
                id="amount"
                value={form.amount?.toString() || ""}
                required
              />
            </div>

            <div className="w-full">
              <Label htmlFor="status" value="Status do Pagamento" />
              <Select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="pendente">Pendente</option>
                <option value="pago">Pago</option>
                <option value="atrasado">Atrasado</option>
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
