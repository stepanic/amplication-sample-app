import { ProbaWhereInput } from "./ProbaWhereInput";
import { ProbaOrderByInput } from "./ProbaOrderByInput";

export type ProbaFindManyArgs = {
  where?: ProbaWhereInput;
  orderBy?: Array<ProbaOrderByInput>;
  skip?: number;
  take?: number;
};
