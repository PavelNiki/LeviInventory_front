import {
  Inventory,
  InventoryAction,
  InventoryActionTypes,
} from "../../../types/inventory";

class InventoryActionCreators {
  getAllInventory = (): InventoryAction => {
    return { type: InventoryActionTypes.GET_ALL_INVENTORY };
  };
  getAllInventorySuccess = (payload: Inventory[]): InventoryAction => {
    return { type: InventoryActionTypes.GET_ALL_INVENTORY_SUCCESS, payload };
  };
  getAllInventoryError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.GET_ALL_INVENTORY_ERROR, payload };
  };
  deleteOneInventory = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.DELETE_ONE_INVENTORY, payload };
  };
  deleteOneInventorySuccess = (payload: Inventory): InventoryAction => {
    return { type: InventoryActionTypes.DELETE_ONE_INVENTORY_SUCCESS, payload };
  };
  deleteOneInventoryError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.DELETE_ONE_INVENTORY_ERROR, payload };
  };
  makeInventory = (payload: Inventory[]): InventoryAction => {
    return { type: InventoryActionTypes.MAKE_AN_INVENTORY, payload };
  };
  makeInventorySuccess = (payload: Inventory[]): InventoryAction => {
    return { type: InventoryActionTypes.MAKE_AN_INVENTORY_SUCCESS, payload };
  };
  makeInventoryError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.MAKE_AN_INVENTORY_ERROR, payload };
  };
  addOneInventoryItem = (payload: Inventory): InventoryAction => {
    return { type: InventoryActionTypes.ADD_ONE_INVENTORY, payload };
  };
  addOneInventoryItemSuccess = (payload: Inventory): InventoryAction => {
    return { type: InventoryActionTypes.ADD_ONE_INVENTORY_SUCCESS, payload };
  };
  addOneInventoryItemError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.ADD_ONE_INVENTORY_ERROR, payload };
  };
  addManyInventoryItems = (payload: Inventory[]): InventoryAction => {
    return { type: InventoryActionTypes.ADD_MANY_INVENTORY, payload };
  };
  addManyInventoryItemsSuccess = (payload: Inventory[]): InventoryAction => {
    return { type: InventoryActionTypes.ADD_MANY_INVENTORY_SUCCESS, payload };
  };
  addManyInventoryItemsError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.ADD_MANY_INVENTORY_ERROR, payload };
  };
  getFreeInventory = (): InventoryAction => {
    return { type: InventoryActionTypes.GET_FREE_INVENTORY };
  };
  getFreeInventorySuccess = (payload: Inventory[]): InventoryAction => {
    return { type: InventoryActionTypes.GET_FREE_INVENTORY_SUCCESS, payload };
  };
  getFreeInventoryError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.GET_FREE_INVENTORY_ERROR, payload };
  };
  updateInventoryItem = (payload: Inventory): InventoryAction => {
    return { type: InventoryActionTypes.UPDATE_ONE_INVENTORY, payload };
  };
  updateInventoryItemSuccess = (payload: Inventory): InventoryAction => {
    return { type: InventoryActionTypes.UPDATE_ONE_INVENTORY_SUCCESS, payload };
  };
  updateInventoryItemError = (payload: string): InventoryAction => {
    return { type: InventoryActionTypes.UPDATE_ONE_INVENTORY_ERROR, payload };
  };
}
export default new InventoryActionCreators();
