import { User, UserActionTypes } from "../../../types/user";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();
class UserActionCreators {
  getAllUsers = actionCreator.async<void, User[]>(
    UserActionTypes.GET_ALL_USERS
  );

  getOneUser = actionCreator.async<number, User>(UserActionTypes.GET_ONE_USER);

  deleteOneUser = actionCreator.async<number, any>(
    UserActionTypes.DELETE_ONE_USER
  );

  updateOneUser = actionCreator.async<User, User>(
    UserActionTypes.UPDATE_ONE_USER
  );

  addOneUser = actionCreator.async<User, User>(UserActionTypes.ADD_ONE_USER);

  signIn = actionCreator.async<{ email: string; password: string }, User>(
    UserActionTypes.SIGN_IN
  );
}
export default new UserActionCreators();
