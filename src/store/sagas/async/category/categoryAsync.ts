import instance from "..";
import { Category } from "../../../../types/category";

class CategoryAsyncRequest {
  getAllCategories = async () => {
    return await instance.get(`/category/all`);
  };
  getOneCategory = async (id: number) => {
    return await instance.get(`/category/one/${id}`);
  };
  deleteOneCategory = async (id: number) => {
    return await instance.get(`/category/delete/${id}`);
  };
  addOneCategory = async (category: Category) => {
    return await instance.post(`/category/add`, category);
  };
  updateOneCategory = async (category: Category) => {
    return await instance.patch("/category/update", category);
  };
  addManyCategory = async (category: Category[]) => {
    return await instance.post(`/category/add_many`, category);
  };
}
export default new CategoryAsyncRequest();
