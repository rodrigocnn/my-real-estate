import {
  contractCreate,
  contractDelete,
  contractFindAll,
  contractFindOne,
  contractUpdate,
} from "../api/contractsApi";
import { Contract } from "../interfaces";

export const INITIAL_FORM_CONTRACT = {
  client_id: "",
  property_id: "",
  start_date: null,
  end_date: null,
  monthly_rent: undefined,
  deposit_amount: undefined,
  status: "",
};

export const propsCreateContract = {
  queryKey: "get-contracts",
  onSuccessMsg: "Cliente cadastrado com sucesso",
  mutationFn: (contract: Contract) => contractCreate(contract),
};

export const propsUpdateContract = {
  queryKey: "get-contracts",
  onSuccessMsg: "Contrato atualizado com sucesso",
  mutationFn: (contract: Contract) => contractUpdate(contract),
};

export const propsDeleteContract = {
  queryKey: "get-contracts",
  onSuccessMsg: "Contrato excluíd com sucesso",
  mutationFn: (id: string) => contractDelete(id),
};

export const propsFindAllContract = {
  queryKey: "get-contracts",
  queryFn: contractFindAll,
};

export const propsFindOneContract = {
  queryKey: "get-contract",
  queryFn: (id: string) => contractFindOne(id),
  enabled: true,
};
