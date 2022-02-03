import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import inventoryAsync from "../async/inventory/inventoryAsync";
import inventoryActionCreators from "../../actions/inventory/inventory";
import {
  AddManyInventoryItem,
  AddOneInventoryItem,
  DeleteOneInventory,
  InventoryActionTypes,
  MakeInventory,
  UpdateOneInventoryItem,
} from "../../../types/inventory";

function* allInventorySaga(): SagaIterator {
  try {
    const response = yield call(inventoryAsync.getAllInventory);
    yield put(inventoryActionCreators.getAllInventorySuccess(response.data));
  } catch (error) {
    yield put(inventoryActionCreators.getAllInventoryError(error as string));
    console.error();
  }
}

function* freeInventorySaga(): SagaIterator {
  try {
    const response = yield call(inventoryAsync.getFreeInventory);
    yield put(inventoryActionCreators.getFreeInventorySuccess(response.data));
  } catch (error) {
    yield put(inventoryActionCreators.getFreeInventoryError(error as string));
    console.error();
  }
}

function* makeInventorySaga(action: MakeInventory): SagaIterator {
  try {
    const response = yield call(inventoryAsync.makeInventory, action.payload);
    yield put(inventoryActionCreators.makeInventorySuccess(response.data));
  } catch (error) {
    yield put(inventoryActionCreators.makeInventoryError(error as string));
    console.error();
  }
}

function* addOneInventoryItemSaga(action: AddOneInventoryItem): SagaIterator {
  try {
    const response = yield call(
      inventoryAsync.addOneInventoryItem,
      action.payload
    );
    yield put(inventoryActionCreators.addOneInventoryItem(response.data));
  } catch (error) {
    yield put(
      inventoryActionCreators.addOneInventoryItemError(error as string)
    );
    console.error();
  }
}

function* addManyInventoryItemsSaga(
  action: AddManyInventoryItem
): SagaIterator {
  try {
    const response = yield call(
      inventoryAsync.addManyInventoryItems,
      action.payload
    );
    yield put(
      inventoryActionCreators.addManyInventoryItemsSuccess(response.data)
    );
  } catch (error) {
    yield put(
      inventoryActionCreators.addManyInventoryItemsError(error as string)
    );
    console.error();
  }
}

function* deleteOneInventoryItemSaga(action: DeleteOneInventory): SagaIterator {
  try {
    const response = yield call(
      inventoryAsync.deleteOneInventoryItem,
      action.payload
    );
    yield put(inventoryActionCreators.deleteOneInventorySuccess(response.data));
  } catch (error) {
    yield put(inventoryActionCreators.deleteOneInventoryError(error as string));
    console.error();
  }
}

function* updateOneInventoryItemSaga(
  action: UpdateOneInventoryItem
): SagaIterator {
  try {
    const response = yield call(
      inventoryAsync.updateOneInventoryItem,
      action.payload
    );
    yield put(
      inventoryActionCreators.updateInventoryItemSuccess(response.data)
    );
  } catch (error) {
    yield put(
      inventoryActionCreators.updateInventoryItemError(error as string)
    );
    console.error();
  }
}

function* allInventoryWatcherSaga() {
  yield takeLatest(InventoryActionTypes.GET_ALL_INVENTORY, allInventorySaga);
}
function* freeInventoryWatcherSaga() {
  yield takeLatest(InventoryActionTypes.GET_FREE_INVENTORY, freeInventorySaga);
}
function* makeInventoryWatcherSaga() {
  yield takeLatest(InventoryActionTypes.MAKE_AN_INVENTORY, makeInventorySaga);
}
function* addOneInventoryWatcherSaga() {
  yield takeLatest(
    InventoryActionTypes.ADD_ONE_INVENTORY,
    addOneInventoryItemSaga
  );
}
function* addManyInventoryWatcherSaga() {
  yield takeLatest(
    InventoryActionTypes.ADD_MANY_INVENTORY,
    addManyInventoryItemsSaga
  );
}
function* deleteOneInventoryWatcherSaga() {
  yield takeLatest(
    InventoryActionTypes.DELETE_ONE_INVENTORY,
    deleteOneInventoryItemSaga
  );
}
function* updateOneInventoryWatcherSaga() {
  yield takeLatest(
    InventoryActionTypes.UPDATE_ONE_INVENTORY,
    updateOneInventoryItemSaga
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
