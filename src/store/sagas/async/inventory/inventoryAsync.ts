import instance from "..";
import { Inventory } from "../../../../types/inventory";

class InventoryAsyncRequest {
  getAllInventory = async (): Promise<Inventory[]> => {
    return await instance.get(`/inventory/all`);
  };
  addOneInventoryItem = async (inventory: Inventory): Promise<Inventory> => {
    return await instance.post(`/inventory/add`, inventory);
  };
  updateOneInventoryItem = async (inventory: Inventory): Promise<Inventory> => {
    return await instance.patch(`/inventory/update`, inventory);
  };
  deleteOneInventoryItem = async (id: number): Promise<Inventory> => {
    return await instance.get(`/inventory/delete/${id}`);
  };
  makeInventory = async (inventoryList: Inventory[]): Promise<Inventory> => {
    return await instance.post(`/inventory/make`, inventoryList);
  };
  getFreeInventory = async (): Promise<Inventory> => {
    return await instance.get(`/inventory/free`);
  };
  addManyInventoryItems = async (inventory: Inventory[]): Promise<any> => {
    return await instance.post(`/inventory/add_many`, inventory);
  };
}
export default new InventoryAsyncRequest();
