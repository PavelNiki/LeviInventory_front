import { Defect } from "./defect";

interface GetAllInventorySuccess {
  type: InventoryActionTypes.GET_ALL_INVENTORY_SUCCESS;
  payload: Inventory[];
}

interface GetAllInventoryError {
  type: InventoryActionTypes.GET_ALL_INVENTORY_ERROR;
  payload: string;
}

interface DeleteOneInventorySuccess {
  type: InventoryActionTypes.DELETE_ONE_INVENTORY_SUCCESS;
  payload: Inventory;
}

interface DeleteOneInventoryError {
  type: InventoryActionTypes.DELETE_ONE_INVENTORY_ERROR;
  payload: string;
}

interface AddOneInventoryItemSuccess {
  type: InventoryActionTypes.ADD_ONE_INVENTORY_SUCCESS;
  payload: Inventory;
}
interface AddOneInventoryItemError {
  type: InventoryActionTypes.ADD_ONE_INVENTORY_ERROR;
  payload: string;
}

interface AddManyInventoryItemSuccess {
  type: InventoryActionTypes.ADD_MANY_INVENTORY_SUCCESS;
  payload: Inventory[];
}

interface AddManyInventoryItemError {
  type: InventoryActionTypes.ADD_MANY_INVENTORY_ERROR;
  payload: string;
}

interface GetFreeInventorySuccess {
  type: InventoryActionTypes.GET_FREE_INVENTORY_SUCCESS;
  payload: Inventory[];
}

interface GetFreeInventoryError {
  type: InventoryActionTypes.GET_FREE_INVENTORY_ERROR;
  payload: string;
}

interface UpdateOneInventoryItemSuccess {
  type: InventoryActionTypes.UPDATE_ONE_INVENTORY_SUCCESS;
  payload: Inventory;
}

interface UpdateOneInventoryItemError {
  type: InventoryActionTypes.UPDATE_ONE_INVENTORY_ERROR;
  payload: string;
}

interface MakeInventorySuccess {
  type: InventoryActionTypes.MAKE_AN_INVENTORY_SUCCESS;
  payload: Inventory[];
}

interface MakeInventoryError {
  type: InventoryActionTypes.MAKE_AN_INVENTORY_ERROR;
  payload: string;
}

export interface AddOneInventoryItem {
  type: InventoryActionTypes.ADD_ONE_INVENTORY;
  payload: Inventory;
}

export interface AddManyInventoryItem {
  type: InventoryActionTypes.ADD_MANY_INVENTORY;
  payload: Inventory[];
}

export interface UpdateOneInventoryItem {
  type: InventoryActionTypes.UPDATE_ONE_INVENTORY;
  payload: Inventory;
}

export interface MakeInventory {
  type: InventoryActionTypes.MAKE_AN_INVENTORY;
  payload: Inventory[];
}

export interface DeleteOneInventory {
  type: InventoryActionTypes.DELETE_ONE_INVENTORY;
  payload: string;
}

export interface GetAllInventory {
  type: InventoryActionTypes.GET_ALL_INVENTORY;
}

export interface GetFreeInventory {
  type: InventoryActionTypes.GET_FREE_INVENTORY;
}

export interface Inventory {
  id?: number;
  category: string;
  ownerId?: number | null;
  roomName: string;
  itemImage?: string;
  name: string;
  setupId?: number | null;
  defect?: Defect[];
  createdAt?: Date;
  updateAt?: Date;
  updateBy?: any[];
}

export enum InventoryActionTypes {
  GET_ALL_INVENTORY = "GET_ALL_INVENTORY",
  GET_ALL_INVENTORY_SUCCESS = "GET_ALL_INVENTORY_SUCCESS",
  GET_ALL_INVENTORY_ERROR = "GET_ALL_INVENTORY_ERROR ",
  ADD_ONE_INVENTORY = "ADD_ONE_INVENTORY",
  ADD_ONE_INVENTORY_SUCCESS = "ADD_ONE_INVENTORY_SUCCESS",
  ADD_ONE_INVENTORY_ERROR = "ADD_ONE_INVENTORY_ERROR",
  ADD_MANY_INVENTORY = "ADD_MANY_INVENTORY",
  ADD_MANY_INVENTORY_SUCCESS = "ADD_MANY_INVENTORY_SUCCESS",
  ADD_MANY_INVENTORY_ERROR = "ADD_MANY_INVENTORY_ERROR",
  DELETE_ONE_INVENTORY = "DELETE_ONE_INVENTORY",
  DELETE_ONE_INVENTORY_SUCCESS = "DELETE_ONE_INVENTORY_SUCCESS",
  DELETE_ONE_INVENTORY_ERROR = "DELETE_ONE_INVENTORY_ERROR",
  GET_FREE_INVENTORY = "GET_FREE_INVENTORY",
  GET_FREE_INVENTORY_SUCCESS = "GET_FREE_INVENTORY_SUCCESS",
  GET_FREE_INVENTORY_ERROR = "GET_FREE_INVENTORY_ERROR",
  UPDATE_ONE_INVENTORY = "UPDATE_ONE_INVENTORY",
  UPDATE_ONE_INVENTORY_SUCCESS = "UPDATE_ONE_INVENTORY_SUCCESS",
  UPDATE_ONE_INVENTORY_ERROR = "UPDATE_ONE_INVENTORY_ERROR",
  MAKE_AN_INVENTORY = "MAKE_AN_INVENTORY",
  MAKE_AN_INVENTORY_SUCCESS = "MAKE_AN_INVENTORY_SUCCESS",
  MAKE_AN_INVENTORY_ERROR = "MAKE_AN_INVENTORY_ERROR",
}

export interface InventoryState {
  inventory: Inventory[] | null;
  loading: boolean;
  currentInventory: Inventory | Inventory[] | null;
  freeInventory: Inventory[] | Inventory | null;
  inventoryList: Inventory | Inventory[] | null;
  error: null | string;
}

export type InventoryAction =
  | GetAllInventory
  | GetAllInventorySuccess
  | GetAllInventoryError
  | DeleteOneInventory
  | DeleteOneInventorySuccess
  | DeleteOneInventoryError
  | MakeInventory
  | MakeInventoryError
  | MakeInventorySuccess
  | AddManyInventoryItem
  | AddManyInventoryItemError
  | AddManyInventoryItemSuccess
  | AddOneInventoryItem
  | AddOneInventoryItemError
  | AddOneInventoryItemSuccess
  | UpdateOneInventoryItem
  | UpdateOneInventoryItemError
  | UpdateOneInventoryItemSuccess
  | GetFreeInventory
  | GetFreeInventoryError
  | GetFreeInventorySuccess;
