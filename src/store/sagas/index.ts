import usersWatcherSaga from "./user/user.saga";
import { all } from "redux-saga/effects";
import { inventorySagas } from "./inventory/inventory.saga";
import { roomWatcher } from "./room/room.sags";
import { setupWatcher } from "./setup/setup.saga";
import { categoryWatcher } from "./category/category.saga";

export default function* rootSaga() {
  yield all([
    usersWatcherSaga(),
    inventorySagas(),
    roomWatcher(),
    setupWatcher(),
    categoryWatcher(),
  ]);
}
