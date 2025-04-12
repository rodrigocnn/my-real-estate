import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useFormClient } from "../hooks/useFormClient";

interface FormClientProps {
  edit?: boolean;
  initialData?: any;
}

export function FormClient(props: FormClientProps) {
  const initialData = props.initialData || [];

  const { form, handleChange, handleSubmit } = useFormClient(
    initialData,
    props.edit
  );

  return (
    <div className="bg-white p-4 rounded">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-gray-200 p-2 mb-4">
            <h2>Geral</h2>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="nome" value="Nome" />
              <TextInput
                onChange={handleChange}
                name="name"
                id="nome"
                value={form.name}
                required
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="email" value="Email" />
              <TextInput
                onChange={handleChange}
                name="email"
                id="email"
                value={form.email}
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full mb-4">
              <Label htmlFor="cpf" value="CPF" />
              <TextInput
                onChange={handleChange}
                name="cpf"
                id="cpf"
                value={form.cpf}
                required
              />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="telefone" value="Telefone" />
              <TextInput
                onChange={handleChange}
                name="phone"
                id="telefone"
                value={form.phone}
                required
              />
            </div>
          </div>

          <div className="col-span-2">
            <Button type="submit">
              {props.edit ? "Atualizar" : "Cadastrar"} Cliente
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
