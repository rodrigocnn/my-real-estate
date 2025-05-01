import { ownerCreate, ownerFindOne, ownersFindAll, ownerUpdate } from "../api";
import { Owner } from "../interfaces";

export const INITIAL_STATE_FORM_OWNER = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
};

export const propsFindAllOwners = {
  queryKey: "get-owners",
  queryFn: ownersFindAll,
};

export const propsFindOneOwner = {
  queryKey: "get-owner",
  queryFn: (id: string) => ownerFindOne(id),
  enabled: true,
};

export const propsCreateOwner = {
  queryKey: "get-owners",
  onSuccessMsg: "Proprietário cadastrado com sucesso",
  mutationFn: (owner: Owner) => ownerCreate(owner),
};

export const propsUpdateOwner = {
  queryKey: "get-owners",
  onSuccessMsg: "Proprietário atualizado com sucesso",
  mutationFn: (owner: Owner) => ownerUpdate(owner),
};
