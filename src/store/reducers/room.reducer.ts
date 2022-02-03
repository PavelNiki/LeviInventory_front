import { RoomState } from "../../types/room";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import room from "../actions/room/room";

const initialState: RoomState = {
  rooms: null,
  loading: false,
  currentRoom: null,
  error: null,
};
export const roomReducer = reducerWithInitialState(initialState)
  .case(room.getAllRooms.started, (state): RoomState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(room.getAllRooms.done, (state, payload): RoomState => {
    return {
      ...state,
      rooms: payload.result,
      loading: false,
    };
  })
  .case(room.getAllRooms.failed, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(room.getOneRoom.started, (state): RoomState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(room.getOneRoom.done, (state, payload): RoomState => {
    return {
      ...state,
      currentRoom: payload.result,
      loading: false,
    };
  })
  .case(room.getOneRoom.failed, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(room.deleteOneRoom.started, (state): RoomState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(room.deleteOneRoom.done, (state): RoomState => {
    return {
      ...state,
      currentRoom: null,
      loading: false,
    };
  })
  .case(room.getOneRoom.failed, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(room.editOneRoom.started, (state): RoomState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(room.editOneRoom.done, (state, payload): RoomState => {
    return {
      ...state,
      currentRoom: payload.result,
      loading: false,
    };
  })
  .case(room.editOneRoom.failed, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(room.addOneRoom.started, (state): RoomState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(room.addOneRoom.done, (state, payload): RoomState => {
    return {
      ...state,
      currentRoom: payload.result,
      loading: false,
    };
  })
  .case(room.addOneRoom.failed, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(room.addManyRooms.started, (state): RoomState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(room.addManyRooms.done, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
    };
  })
  .case(room.addManyRooms.failed, (state, payload): RoomState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  });
