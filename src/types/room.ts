import { Inventory } from "./inventory";
import { Setup } from "./setup";

export interface Room {
  id?: number;
  name: string;
  inventory?: Inventory | Inventory[];
  setups?: Setup | Setup[];
}
export enum RoomActionTypes {
  GET_ALL_ROOMS = "GET_ALL_ROOMS",
  GET_ONE_ROOM = "GET_ONE_ROOM",
  DELETE_ONE_ROOM = "DELETE_ONE_ROOM",
  UPDATE_ONE_ROOM = "UPDATE_ONE_ROOM",
  ADD_ONE_ROOM = "ADD_ONE_ROOM",
  ADD_MANY_ROOMS = "ADD_MANY_ROOMS",
}
export interface RoomState {
  rooms: Room[] | null;
  loading: boolean;
  currentRoom: Room | null;
  error: null | any;
}
