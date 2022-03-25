import { Proba as TProba } from "../api/proba/Proba";

export const PROBA_TITLE_FIELD = "subtitle";

export const ProbaTitle = (record: TProba): string => {
  return record.subtitle || record.id;
};
