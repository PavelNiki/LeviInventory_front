import instance from "..";
import { User } from "../../../../types/user";

class UserAsyncRequest {
  getAll = async (): Promise<User[]> => {
    return await instance.get(`/users/all`);
  };
  getOne = async (id: number): Promise<User> => {
    return await instance.get(`/users/${id}`);
  };
  addUser = async (user: User): Promise<User> => {
    return await instance.post(`$/users/add`, user);
  };
  deleteOneUser = async (id: number): Promise<User> => {
    return await instance.get(`$/users/delete/${id}`);
  };
  updateOneUser = async (user: User): Promise<User> => {
    return await instance.patch(`$/users/update`, user);
  };
  signIn = async (user: { email: string; password: string }) => {
    try {
      const condidate = await instance.post(`/auth/login`, user);
      if (condidate) {
        localStorage.setItem("token", condidate.headers?.authorization);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default new UserAsyncRequest();
