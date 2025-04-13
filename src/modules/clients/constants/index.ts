import { clientCreate, clientsFindAll, clientUpdate } from "../api";
import { Client } from "../interfaces";

export const INITIAL_STATE_FORM_CLIENT = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
};

export const propsFindAllClients = {
  queryKey: "get-clients",
  queryFn: clientsFindAll,
};

export const propsCreateClient = {
  queryKey: "get-clients",
  onSuccessMsg: "Cliente cadastrado com sucesso",
  mutationFn: (client: Client) => clientCreate(client),
};

export const propsUpdateClient = {
  queryKey: "get-properties",
  onSuccessMsg: "Imóvel atualizado com sucesso",
  mutationFn: (client: Client) => clientUpdate(client),
};
