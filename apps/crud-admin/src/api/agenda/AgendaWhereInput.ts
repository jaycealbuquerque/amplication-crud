import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgendaWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
};
