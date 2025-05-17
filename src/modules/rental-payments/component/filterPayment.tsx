import { Button, Datepicker, Label, Select, TextInput } from "flowbite-react";
import { useFilterPayment } from "../hooks/useFilterPayment";

export function FilterPayment() {
  const { filter, handleChange, handleDateChange, handleSubmit } =
    useFilterPayment();

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex mb-6 gap-4 flex-wrap">
        <div className="w-full sm:w-auto">
          <Label htmlFor="filter_by" value="Filtrar por:" />
          <Select
            value={filter.filter_by}
            onChange={handleChange}
            id="filter_by"
            name="filter_by"
          >
            <option value="due">Data de vencimento</option>
            <option value="payment">Data de pagamento</option>
          </Select>
        </div>

        <div className="w-full sm:w-auto">
          <Label htmlFor="initial_date" value="Data Início" />
          <Datepicker
            language="pt-BR"
            labelTodayButton="Hoje"
            labelClearButton="Limpar"
            name="initial_date"
            onChange={(date) => handleDateChange("initial_date", date)}
            value={filter.initial_date as Date}
          />
        </div>

        <div className="w-full sm:w-auto">
          <Label htmlFor="end_date" value="Data Fim" />
          <Datepicker
            language="pt-BR"
            labelTodayButton="Hoje"
            labelClearButton="Limpar"
            name="end_date"
            onChange={(date) => handleDateChange("end_date", date)}
            value={filter.end_date as Date}
          />
        </div>

        <div className="w-full sm:w-auto">
          <Label htmlFor="rental_contract_id" value="Número do Contrato" />
          <TextInput
            onChange={handleChange}
            id="rental_contract_id"
            name="rental_contract_id"
            value={filter.rental_contract_id}
          />
        </div>

        <div className="w-full sm:w-auto">
          <Label htmlFor="status" value="Status" />
          <Select
            onChange={handleChange}
            id="status"
            name="status"
            value={filter.status}
          >
            <option value="">Todos</option>
            <option value="Pago">Pago</option>
            <option value="Pendente">Pendente</option>
          </Select>
        </div>

        <div className="mt-6 sm:mt-auto">
          <Button type="submit">Pesquisar</Button>
        </div>
      </div>
    </form>
  );
}
