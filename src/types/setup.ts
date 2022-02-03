import { Inventory } from "./inventory";

export interface Setup {
  id?: number;
  active: boolean;
  ownerId?: number;
  name: string;
  roomName: string;
  inventory: Inventory | Inventory[];
  createdAt?: Date;
  updateAt?: Date;
  updateBy?: any[];
}
export enum SetupActionTypes {
  GET_ONE = "GET_ONE",
  GET_MANY = "GET_MANY",
  DELETE_ONE = "DELETE_ONE",
  UPDATE_ONE = "UPDATE_ONE",
  ADD_ONE = "ADD_ONE",
}
export interface SetupState {
  setups: Setup[] | null;
  loading: boolean;
  currentSetup: Setup | null;
  error: any | null;
}
