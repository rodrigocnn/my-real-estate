import { DataGrid } from "@/components/admin/Datagrid";

import { columnsRentalPayment } from "../columns";
import { FormRentalPaymentModal } from "./formModal";
import { useModalRentalPayment } from "../hooks/useModalRentalPayment";
import { Contract } from "@/modules/contracts/interfaces";

interface ShowPaymentsProps {
  contract: Contract;
}

export default function ShowPayments(props: ShowPaymentsProps) {
  const {
    payments,
    createMode,
    setCreateMode,
    form,
    handleChange,
    handleSubmit,
    handleDateChange,
    handleChangeCurrency,
  } = useModalRentalPayment(props.contract.id as string);

  return (
    <div className="bg-white p-4 rounded ">
      <div className="overflow-x-auto">
        {createMode ? (
          <div>
            <FormRentalPaymentModal
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleDateChange={handleDateChange}
              handleChangeCurrency={handleChangeCurrency}
              contract={props.contract}
            />
          </div>
        ) : (
          <DataGrid
            rows={payments}
            columns={columnsRentalPayment}
            addAction={{
              label: "Cadastrar Pagamento",
              onClick: () => setCreateMode(true),
            }}
          />
        )}
      </div>
    </div>
  );
}
