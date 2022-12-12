import { seassion } from "./seassion.model";

export interface room {
  name: string,
  types: string[],
  seassions: seassion[]
}
