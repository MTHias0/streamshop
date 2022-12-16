import { session } from "./seassion.model";

export interface room {
  name: string,
  types: string[],
  session: session[]
}
