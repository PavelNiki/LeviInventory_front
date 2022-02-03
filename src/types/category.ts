import { Inventory } from "./inventory";

export enum CategotyActionTypes {
  GET_ONE_CATEGORY = "GET_ONE_CATEGORY",
  GET_ALL_CATEGOIES = "GET_ALL_CATEGOIES",
  ADD_ONE_CATEGORY = "ADD_ONE_CATEGORY",
  ADD_MANY_CATEGORIES = "ADD_MANY_CATEGORIES",
  DELETE_ONE_CATEGORY = "DELETE_ONE_CATEGORY",
  UPDATE_ONE_CATEGORY = "UPDATE_ONE_CATEGORY",
}

export interface Category {
  id?: number;
  name: string;
  inventory: Inventory | Inventory[];
  createdAt?: Date;
  updateAt?: Date;
  updateBy?: any[];
}
export interface CategoryState {
  categories: Category[] | null;
  currentCategory: Category | null;
  loading: boolean;
  error: any | null;
}
