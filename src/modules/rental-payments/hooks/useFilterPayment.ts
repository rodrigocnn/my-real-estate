import { useState } from "react";

interface FilterPayment {
  filter_by: string;
  rental_contract_id: number | string;
  initial_date: Date | null;
  end_date: Date | null;
  status: string;
}

export function useFilterPayment() {
  const INITIAL_FILTER: FilterPayment = {
    filter_by: "",
    rental_contract_id: "",
    initial_date: null,
    end_date: null,
    status: "",
  };
  const [filter, setFilter] = useState<FilterPayment>(INITIAL_FILTER);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => ({
      ...prev!,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    console.log("Filter", filter);
  };

  return { filter, handleChange, handleDateChange, handleSubmit };
}
