import { DataGrid } from "@/components/admin/Datagrid";
import { useRouter } from "next/router";

import { useFindAllQuery } from "@/hooks/useFindAllQuery";
import { RentalPayment } from "@/modules/rental-payments/interfaces";
import { propsFindAllRentalPayments } from "@/modules/rental-payments/constants";
import { columnsRentalPayment } from "../columns";
import { useMemo, useState } from "react";
import { formatDateToPtBR } from "@/utils";
import { FormRentalPayment } from "./form";

export default function ShowPayments() {
  const { data: payments } = useFindAllQuery<RentalPayment>(
    propsFindAllRentalPayments
  );

  const [createMode, setCreateMode] = useState<boolean>(false);

  const formattedPayments = useMemo(() => {
    return (
      payments?.map((payment) => ({
        ...payment,
        dueDate: formatDateToPtBR(payment.dueDate),
        paymentDate: formatDateToPtBR(payment.paymentDate),
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
