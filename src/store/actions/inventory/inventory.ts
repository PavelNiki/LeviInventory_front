import { Inventory, InventoryActionTypes } from "../../../types/inventory";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();
class InventoryActionCreators {
  getAllInventory = actionCreator.async<void, Inventory[]>(
    InventoryActionTypes.GET_ALL_INVENTORY
  );

  deleteOneInventory = actionCreator.async<number, Inventory>(
    InventoryActionTypes.DELETE_ONE_INVENTORY
  );

  makeInventory = actionCreator.async<Inventory[], Inventory[]>(
    InventoryActionTypes.MAKE_AN_INVENTORY
  );

  addOneInventoryItem = actionCreator.async<Inventory, Inventory>(
    InventoryActionTypes.ADD_ONE_INVENTORY
  );

  addManyInventoryItems = actionCreator.async<Inventory[], any>(
    InventoryActionTypes.ADD_MANY_INVENTORY
  );

  getFreeInventory = actionCreator.async<void, Inventory[]>(
    InventoryActionTypes.GET_FREE_INVENTORY
  );

  updateInventoryItem = actionCreator.async<Inventory, Inventory>(
    InventoryActionTypes.UPDATE_ONE_INVENTORY
  );
}

export default new InventoryActionCreators();
