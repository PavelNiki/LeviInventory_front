import axios from "axios";
import { Inventory } from "../../../../types/inventory";

class InventoryAsyncRequest {
  getAllInventory = async (): Promise<Inventory[]> => {
    return await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/all`
    );
  };
  addOneInventoryItem = async (inventory: Inventory): Promise<Inventory> => {
    return await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/add`,
      inventory
    );
  };
  updateOneInventoryItem = async (inventory: Inventory): Promise<Inventory> => {
    return await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/update`,
      inventory
    );
  };
  deleteOneInventoryItem = async (id: string): Promise<Inventory> => {
    return await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/delete/${id}`
    );
  };
  makeInventory = async (inventoryList: Inventory[]): Promise<Inventory> => {
    return await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/make`,
      inventoryList
    );
  };
  getFreeInventory = async (): Promise<Inventory> => {
    return await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/free`
    );
  };
  addManyInventoryItems = async (inventory: Inventory[]): Promise<any> => {
    return await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/inventory/add_many`,
      inventory
    );
  };
}
export default new InventoryAsyncRequest();
