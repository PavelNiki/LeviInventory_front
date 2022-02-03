import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { call, takeLatest, all } from "redux-saga/effects";
import roomAsycn from "../async/room/roomAsycn";
import roomAction from "../../actions/room/room";
import { SagaIterator } from "redux-saga";
import { AxiosResponse } from "axios";
import { Room } from "../../../types/room";

const getAllRooms = bindAsyncAction(roomAction.getAllRooms, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<Room[]> = yield call(roomAsycn.getAllRooms);
  return response.data;
});

const getOneRoom = bindAsyncAction(roomAction.getOneRoom, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<Room> = yield call(roomAsycn.getOneRoom, id);
  return response.data;
});

const deleteOneRoom = bindAsyncAction(roomAction.deleteOneRoom, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<Room> = yield call(roomAsycn.deleteOneRoom, id);
  yield call(getAllRooms);
});

const addOneRoom = bindAsyncAction(roomAction.addOneRoom, {
  skipStartedAction: true,
})(function* (room): SagaIterator {
  const response: AxiosResponse<Room> = yield call(roomAsycn.addOneRoom, room);
  yield call(getAllRooms);
  return response.data;
});

const addManyRooms = bindAsyncAction(roomAction.addManyRooms, {
  skipStartedAction: true,
})(function* (rooms) {
  const response = yield call(roomAsycn.addManyRooms, rooms);
  yield call(getAllRooms);
  return response.data;
});
const updateRoom = bindAsyncAction(roomAction.editOneRoom, {
  skipStartedAction: true,
})(function* (room): SagaIterator {
  const response: AxiosResponse<Room> = yield call(
    roomAsycn.updateOneRoom,
    room
  );
  return response.data;
});
function* updateOneRoomWatcher() {
  yield takeLatest(roomAction.editOneRoom.started, (action: Action<Room>) => {
    return updateRoom(action.payload);
  });
}
function* addManyRoomsWatcher() {
  yield takeLatest(
    roomAction.addManyRooms.started,
    (action: Action<Room[]>) => {
      return addManyRooms(action.payload);
    }
  );
}
function* addOneRoomWatcher() {
  yield takeLatest(roomAction.addOneRoom.started, (action: Action<Room>) => {
    return addOneRoom(action.payload);
  });
}
function* deleteRoomWatcher() {
  yield takeLatest(
    roomAction.deleteOneRoom.started,
    (action: Action<number>) => {
      return deleteOneRoom(action.payload);
    }
  );
}
function* oneRoomWatcher() {
  yield takeLatest(roomAction.getOneRoom.started, (action: Action<number>) => {
    return getOneRoom(action.payload);
  });
}
function* allRoomsWatcher() {
  yield takeLatest(roomAction.getAllRooms.started, getAllRooms);
}
export function* roomWatcher() {
  yield all([
    allRoomsWatcher(),
    oneRoomWatcher(),
    deleteRoomWatcher(),
    addOneRoomWatcher(),
    addManyRoomsWatcher(),
    updateOneRoomWatcher(),
  ]);
}
