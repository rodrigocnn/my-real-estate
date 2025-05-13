import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { columnsRentalPayment } from "../columns";
import { useMemo, useState } from "react";
import { formatDateToPtBR } from "@/utils";
import { FormRentalPayment } from "./form";

import { useModalRentalPayment } from "../hooks/useModalRentalPayment";

interface ShowPaymentsProps {
  contractId: string;
}

export default function ShowPayments(props: ShowPaymentsProps) {
  const { payments } = useModalRentalPayment(props.contractId);
  const [createMode, setCreateMode] = useState<boolean>(false);

  const formattedPayments = useMemo(() => {
    return (
      payments?.map((payment) => ({
        ...payment,
        due_date: formatDateToPtBR(payment.due_date),
        payment_date: formatDateToPtBR(payment.payment_date),
      })) || []
    );
  }, [payments]);

  return (
    <div className="bg-white p-4 rounded ">
      <div className="overflow-x-auto">
        {createMode ? (
          <div>
            <FormRentalPayment />
          </div>
        ) : (
          <DataGrid
            rows={formattedPayments}
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
