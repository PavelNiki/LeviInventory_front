import { AxiosResponse } from "axios";
import instance from "..";
import { Room } from "../../../../types/room";
class RoomAsyncRequest {
  getAllRooms = async (): Promise<AxiosResponse<Room[] | null>> => {
    return await instance.get("/rooms/all");
  };
  getOneRoom = async (id: number): Promise<AxiosResponse<Room>> => {
    return await instance.get(`rooms/${id}`);
  };
  deleteOneRoom = async (id: number): Promise<AxiosResponse<any>> => {
    return await instance.delete(`rooms/delete/${id}`);
  };
  updateOneRoom = async (room: Room): Promise<AxiosResponse<Room | null>> => {
    return await instance.patch("rooms/update", room);
  };
  addOneRoom = async (room: Room): Promise<AxiosResponse<Room | null>> => {
    return await instance.post("rooms/add", room);
  };
  addManyRooms = async (rooms: Room[]): Promise<AxiosResponse<any>> => {
    return await instance.post("rooms/add_many", rooms);
  };
}
export default new RoomAsyncRequest();
