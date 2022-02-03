import axios from "axios";
import { User } from "../../../../types/user";

class UserAsyncRequest {
  getAll = async (): Promise<User[]> => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/all`);
  };
  getOne = async (id: string): Promise<User> => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`);
  };
  addUser = async (user: User): Promise<User> => {
    return await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/add`,
      user
    );
  };
  deleteOneUser = async (id: string): Promise<User> => {
    return await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users/delete/${id}`
    );
  };
  updateOneUser = async (user: User): Promise<User> => {
    return await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/users/update`,
      user
    );
  };
  signIn = async (user: { email: string; password: string }) => {
    try {
      const condidate = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        user
      );
      if (condidate) {
        localStorage.setItem("token", condidate.headers?.authorization);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default new UserAsyncRequest();
