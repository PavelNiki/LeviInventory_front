import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import inventoryAsync from "../async/inventory/inventoryAsync";
import inventoryAction from "../../actions/inventory/inventory";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { AxiosResponse } from "axios";
import { Action } from "typescript-fsa";
import { Inventory } from "../../../types/inventory";
import { tuple } from "antd/lib/_util/type";

const allInventory = bindAsyncAction(inventoryAction.getAllInventory, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<Inventory[]> = yield call(
    inventoryAsync.getAllInventory
  );
  return response.data;
});

const freeInventory = bindAsyncAction(inventoryAction.getFreeInventory, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<Inventory | Inventory[]> = yield call(
    inventoryAsync.getFreeInventory
  );
  return response.data;
});

const makeInventory = bindAsyncAction(inventoryAction.makeInventory, {
  skipStartedAction: true,
})(function* (inventoryList): SagaIterator {
  const response: AxiosResponse<Inventory | Inventory[]> = yield call(
    inventoryAsync.makeInventory,
    inventoryList
  );
  return response.data;
});

const addOneInventoryItem = bindAsyncAction(
  inventoryAction.addOneInventoryItem,
  { skipStartedAction: true }
)(function* (inventoryItem): SagaIterator {
  const response: AxiosResponse<Inventory> = yield call(
    inventoryAsync.addOneInventoryItem,
    inventoryItem
  );
  return response.data;
});

const addManyInventoryItems = bindAsyncAction(
  inventoryAction.addManyInventoryItems,
  { skipStartedAction: true }
)(function* (inventoryItems): SagaIterator {
  const response: AxiosResponse<any> = yield call(
    inventoryAsync.addManyInventoryItems,
    inventoryItems
  );
  return response.data;
});

const deleteOneInventoryItem = bindAsyncAction(
  inventoryAction.deleteOneInventory,
  { skipStartedAction: true }
)(function* (id): SagaIterator {
  const response: AxiosResponse<Inventory> = yield call(
    inventoryAsync.deleteOneInventoryItem,
    id
  );
  return response.data;
});

const updateInventoryItem = bindAsyncAction(
  inventoryAction.updateInventoryItem,
  { skipStartedAction: true }
)(function* (inventoryItem): SagaIterator {
  const response: AxiosResponse<Inventory> = yield call(
    inventoryAsync.updateOneInventoryItem,
    inventoryItem
  );
  return response.data;
});

function* allInventoryWatcherSaga() {
  yield takeLatest(inventoryAction.getAllInventory.started, allInventory);
}
function* freeInventoryWatcherSaga() {
  yield takeLatest(inventoryAction.getFreeInventory.started, freeInventory);
}
function* makeInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.makeInventory.started,
    (action: Action<Inventory[]>) => {
      return makeInventory(action.payload);
    }
  );
}
function* addOneInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.addOneInventoryItem.started,
    (action: Action<Inventory>) => {
      return addOneInventoryItem(action.payload);
    }
  );
}
function* addManyInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.addManyInventoryItems.started,
    (action: Action<Inventory[]>) => {
      return addManyInventoryItems(action.payload);
    }
  );
}
function* deleteOneInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.deleteOneInventory.started,
    (action: Action<number>) => {
      return deleteOneInventoryItem(action.payload);
    }
  );
}
function* updateOneInventoryWatcherSaga() {
  yield takeLatest(
    inventoryAction.updateInventoryItem.started,
    (action: Action<Inventory>) => {
      return updateInventoryItem(action.payload);
    }
  );
}
export function* inventorySagas() {
  yield all([
    allInventoryWatcherSaga(),
    deleteOneInventoryWatcherSaga(),
    updateOneInventoryWatcherSaga(),
    addManyInventoryWatcherSaga(),
    addOneInventoryWatcherSaga(),
    makeInventoryWatcherSaga(),
    freeInventoryWatcherSaga(),
  ]);
}
