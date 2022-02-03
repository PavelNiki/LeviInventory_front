import actionCreatorFactory from "typescript-fsa";
import { Room, RoomActionTypes } from "../../../types/room";

const actionCreator = actionCreatorFactory();
class RoomActionCreators {
  getOneRoom = actionCreator.async<number, Room>(RoomActionTypes.GET_ONE_ROOM);
  getAllRooms = actionCreator.async<void, Room[]>(
    RoomActionTypes.GET_ALL_ROOMS
  );
  deleteOneRoom = actionCreator.async<number, Room>(
    RoomActionTypes.DELETE_ONE_ROOM
  );
  editOneRoom = actionCreator.async<Room, Room>(
    RoomActionTypes.UPDATE_ONE_ROOM
  );
  addOneRoom = actionCreator.async<Room, Room>(RoomActionTypes.ADD_ONE_ROOM);
  addManyRooms = actionCreator.async<Room[], Room[]>(
    RoomActionTypes.ADD_MANY_ROOMS
  );
}
export default new RoomActionCreators();
