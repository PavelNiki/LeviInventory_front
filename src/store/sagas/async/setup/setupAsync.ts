import { AxiosResponse } from "axios";
import instance from "..";
import { Setup } from "../../../../types/setup";

class SetupAsyncRequest {
  getOneSetup = async (id: number): Promise<AxiosResponse<Setup | null>> => {
    return await instance.get(`/setup/one/${id}`);
  };
  getAllSetups = async (): Promise<AxiosResponse<Setup[] | null>> => {
    return await instance.get("/setup/all");
  };
  addOneSetup = async (setup: Setup): Promise<AxiosResponse<Setup | null>> => {
    return await instance.post("/setup/add", setup);
  };
  updateOneSetup = async (
    setup: Setup
  ): Promise<AxiosResponse<Setup | null>> => {
    return await instance.patch("/setup/update", setup);
  };
  deleteOneSetup = async (id: number): Promise<AxiosResponse<Setup | null>> => {
    return await instance.delete(`/setup/delete/${id}`);
  };
}
export default new SetupAsyncRequest();
