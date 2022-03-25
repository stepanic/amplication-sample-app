import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProbaWhereInput = {
  active?: BooleanNullableFilter;
  id?: StringFilter;
  subtitle?: StringNullableFilter;
  title?: StringNullableFilter;
};
