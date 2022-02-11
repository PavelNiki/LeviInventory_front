import { Setup } from "./setup";
import { Inventory } from "./inventory";
export interface User {
  id?: number;
  name: string;
  last_name: string;
  isAdmin: boolean;
  email: string;
  password?: string;
  phone: string;
  createdAt?: Date;
  updateAt?: Date;
  updateBy?: any[];
  inventory?: Inventory | Inventory[];
  setups?: Setup | Setup[];
}
export enum UserActionTypes {
  GET_ALL_USERS = "GET_ALL_USERS",
  GET_ONE_USER = "GET_ONE_USER",
  SIGN_IN = "SIGN_IN",
  ADD_ONE_USER = "ADD_ONE_USER",
  DELETE_ONE_USER = "DELETE_ONE_USER",
  UPDATE_ONE_USER = "UPDATE_ONE_USER",
}
export interface UserState {
  users: User[] | null;
  currentUser: User | null;
  loading: boolean;
  error: null | any;
}
