import { SagaIterator } from "redux-saga";
import { AxiosResponse } from "axios";
import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { call, takeLatest, all } from "redux-saga/effects";
import categoryAction from "../../actions/category/category";
import categoryAsync from "../async/category/categoryAsync";
import { Category } from "../../../types/category";

const getAllCategories = bindAsyncAction(categoryAction.getAllCategories, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<Category[]> = yield call(
    categoryAsync.getAllCategories
  );
  return response.data;
});
const getOneCategory = bindAsyncAction(categoryAction.getOneCategory, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<Category> = yield call(
    categoryAsync.getOneCategory,
    id
  );
  return response.data;
});
const addOneCategory = bindAsyncAction(categoryAction.addOneCategory, {
  skipStartedAction: true,
})(function* (category): SagaIterator {
  const response: AxiosResponse<Category> = yield call(
    categoryAsync.addOneCategory,
    category
  );
  return response.data;
});
const addManyCategories = bindAsyncAction(categoryAction.addManyCategories, {
  skipStartedAction: true,
})(function* (categories): SagaIterator {
  const response: AxiosResponse<Category> = yield call(
    categoryAsync.addManyCategory,
    categories
  );
  return response.data;
});
const updateOneCategory = bindAsyncAction(categoryAction.updateOneCategory, {
  skipStartedAction: true,
})(function* (category): SagaIterator {
  const response: AxiosResponse<Category> = yield call(
    categoryAsync.updateOneCategory,
    category
  );
  return response.data;
});
const deleteOneCategory = bindAsyncAction(categoryAction.deleteOneCategory, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<Category> = yield call(
    categoryAsync.deleteOneCategory,
    id
  );
  return response.data;
});
function* getAllCategoriesWatcher() {
  yield takeLatest(categoryAction.getAllCategories.started, getAllCategories);
}
function* getOneCategoryWatcher() {
  yield takeLatest(
    categoryAction.getOneCategory.started,
    (action: Action<number>) => {
      return getOneCategory(action.payload);
    }
  );
}
function* deleteOneCategoryWatcher() {
  yield takeLatest(
    categoryAction.deleteOneCategory.started,
    (action: Action<number>) => {
      return deleteOneCategory(action.payload);
    }
  );
}
function* addOneCategoryWatcher() {
  yield takeLatest(
    categoryAction.addOneCategory.started,
    (action: Action<Category>) => {
      return addOneCategory(action.payload);
    }
  );
}
function* addManyCategoriesWatcher() {
  yield takeLatest(
    categoryAction.addManyCategories.started,
    (action: Action<Category[]>) => {
      return addManyCategories(action.payload);
    }
  );
}
function* updateOneCategoryWatcher() {
  yield takeLatest(
    categoryAction.updateOneCategory.started,
    (action: Action<Category>) => {
      return updateOneCategory(action.payload);
    }
  );
}
export function* categoryWatcher() {
  yield all([
    getAllCategoriesWatcher(),
    getOneCategoryWatcher(),
    updateOneCategoryWatcher(),
    deleteOneCategoryWatcher(),
    addManyCategoriesWatcher(),
    addOneCategoryWatcher(),
  ]);
}
