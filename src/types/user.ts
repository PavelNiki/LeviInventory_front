import { Setup } from "./setup";
import { Inventory } from "./inventory";

interface GetUsers {
  type: UserActionTypes.GET_ALL_USERS;
}

interface GetUsersSuccess {
  type: UserActionTypes.GET_ALL_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersError {
  type: UserActionTypes.GET_ALL_USERS_ERROR;
  payload: string;
}

interface GetOneUserSuccess {
  type: UserActionTypes.GET_ONE_USER_SUCCESS;
  payload: User;
}

interface GetOneUserError {
  type: UserActionTypes.GET_ONE_USER_ERROR;
  payload: string;
}

interface SignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: User;
}

interface SignInError {
  type: UserActionTypes.SIGN_IN_ERROR;
  payload: string;
}

interface DeleteOneUserSuccess {
  type: UserActionTypes.DELETE_ONE_USER_SUCCESS;
  payload: User;
}
interface DeleteOneUserError {
  type: UserActionTypes.DELETE_ONE_USER_ERROR;
  payload: string;
}
interface AddOneUserSuccess {
  type: UserActionTypes.ADD_ONE_USER_SUCCESS;
  payload: User;
}
interface AddOneUserError {
  type: UserActionTypes.ADD_ONE_USER_ERROR;
  payload: string;
}
interface UpdateOneUserSuccess {
  type: UserActionTypes.UPDATE_ONE_USER_SUCCESS;
  payload: User;
}
interface UpdateOneUserError {
  type: UserActionTypes.UPDATE_ONE_USER_ERROR;
  payload: string;
}
export interface UpdateOneUser {
  type: UserActionTypes.UPDATE_ONE_USER;
  payload: User;
}
export interface AddOneUser {
  type: UserActionTypes.ADD_ONE_USER;
  payload: User;
}
export interface DeleteOneUser {
  type: UserActionTypes.DELETE_ONE_USER;
  payload: string;
}
export interface SignIn {
  type: UserActionTypes.SIGN_IN;
  payload: { email: string; password: string };
}
export interface GetOneUser {
  type: UserActionTypes.GET_ONE_USER;
  payload: string;
}

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
  GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_ERROR = "GET_ALL_USERS_ERROR ",
  GET_ALL_USERS = "GET_ALL_USERS",
  GET_ONE_USER = "GET_ONE_USER",
  GET_ONE_USER_SUCCESS = "GET_ONE_USER_SUCCESS",
  GET_ONE_USER_ERROR = "GET_ONE_USER_ERROR ",
  SIGN_IN = "SIGN_IN",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR = "SIGN_IN_ERROR",
  ADD_ONE_USER = "ADD_ONE_USER",
  ADD_ONE_USER_SUCCESS = "ADD_ONE_USER_SUCCESS",
  ADD_ONE_USER_ERROR = "ADD_ONE_USER_ERROR",
  DELETE_ONE_USER = "DELETE_ONE_USER",
  DELETE_ONE_USER_SUCCESS = "DELETE_ONE_USER_SUCCESS",
  DELETE_ONE_USER_ERROR = "DELETE_ONE_USER_ERROR",
  UPDATE_ONE_USER = "UPDATE_ONE_USER",
  UPDATE_ONE_USER_SUCCESS = "UPDATE_ONE_USER_SUCCESS",
  UPDATE_ONE_USER_ERROR = "UPDATE_ONE_USER_ERROR",
}
export interface UserState {
  users: User[] | null;
  currentUser: User | null;
  loading: boolean;
  error: null | string;
}
export type UserAction =
  | GetUsersError
  | GetUsersSuccess
  | GetUsers
  | GetOneUser
  | GetOneUserSuccess
  | GetOneUserError
  | SignInError
  | SignIn
  | SignInSuccess
  | AddOneUser
  | AddOneUserError
  | AddOneUserSuccess
  | DeleteOneUser
  | DeleteOneUserError
  | DeleteOneUserSuccess
  | UpdateOneUserError
  | UpdateOneUserSuccess
  | UpdateOneUser;
