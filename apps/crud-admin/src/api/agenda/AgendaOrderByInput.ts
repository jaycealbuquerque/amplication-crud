import { SortOrder } from "../../util/SortOrder";

export type AgendaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nome?: SortOrder;
};
