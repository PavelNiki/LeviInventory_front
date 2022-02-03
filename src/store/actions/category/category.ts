import { Category, CategotyActionTypes } from "../../../types/category";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

class CategoryActionCreators {
  getOneCategory = actionCreator.async<number, Category>(
    CategotyActionTypes.GET_ONE_CATEGORY
  );

  getAllCategories = actionCreator.async<void, Category[]>(
    CategotyActionTypes.GET_ALL_CATEGOIES
  );

  deleteOneCategory = actionCreator.async<number, Category>(
    CategotyActionTypes.DELETE_ONE_CATEGORY
  );

  updateOneCategory = actionCreator.async<Category, Category>(
    CategotyActionTypes.UPDATE_ONE_CATEGORY
  );

  addOneCategory = actionCreator.async<Category, Category>(
    CategotyActionTypes.ADD_ONE_CATEGORY
  );

  addManyCategories = actionCreator.async<Category[], Category[]>(
    CategotyActionTypes.ADD_MANY_CATEGORIES
  );
}
export default new CategoryActionCreators();
