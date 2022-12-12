import { room } from "./room.models";

export interface event {
  id: string,
  eventId: string,
  name: string,
  address: string,
  addressComplement: string,
  rooms: room[]
}
