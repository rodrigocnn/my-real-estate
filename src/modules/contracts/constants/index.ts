import {
  contractCreate,
  contractDelete,
  contractFindAll,
  contractUpdate,
} from "../api/contractsApi";
import { Contract } from "../interfaces";

export const INITIAL_FORM_CONTRACT = {
  clientId: "",
  propertyId: "",
  startDate: "",
  endDate: "",
  monthlyRent: undefined,
  depositAmount: undefined,
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
