import { Defect } from "./defect";

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
  ADD_ONE_INVENTORY = "ADD_ONE_INVENTORY",
  ADD_MANY_INVENTORY = "ADD_MANY_INVENTORY",
  DELETE_ONE_INVENTORY = "DELETE_ONE_INVENTORY",
  GET_FREE_INVENTORY = "GET_FREE_INVENTORY",
  UPDATE_ONE_INVENTORY = "UPDATE_ONE_INVENTORY",
  MAKE_AN_INVENTORY = "MAKE_AN_INVENTORY",
}

export interface InventoryState {
  inventory: Inventory[] | null;
  loading: boolean;
  currentInventory: Inventory | null;
  freeInventory: Inventory[] | Inventory | null;
  inventoryList: Inventory | Inventory[] | null;
  error: any | string;
}
