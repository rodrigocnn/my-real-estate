export function formatCPF(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11); // limita a 11 dígitos

  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11); // limita a 11 dígitos (DDD + número)

  return digits
    .replace(/(\d{2})(\d)/, "($1) $2") // DDD
    .replace(/(\d{5})(\d{4})$/, "$1-$2") // celular com 9 dígitos
    .replace(/(\d{4})(\d{4})$/, "$1-$2"); // telefone fixo com 8 dígitos
}

export function formatDateToPtBR(dateString?: string): string {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("pt-BR").format(new Date(dateString));
}

export function formatarToCurrencyBR(valor: number | string): string {
  const numero =
    typeof valor === "string" ? parseFloat(valor.replace(",", ".")) : valor;

  if (isNaN(numero)) {
    throw new Error("Valor inválido para formatação");
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numero);
}
