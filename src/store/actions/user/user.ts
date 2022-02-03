import { UserAction, User, UserActionTypes } from "../../../types/user";
class UserActionCreators {
  getAllUsers = (): UserAction => {
    return { type: UserActionTypes.GET_ALL_USERS };
  };
  getAllUsersSuccess = (payload: User[]): UserAction => {
    return { type: UserActionTypes.GET_ALL_USERS_SUCCESS, payload };
  };
  getAllUsersError = (payload: string): UserAction => {
    return { type: UserActionTypes.GET_ALL_USERS_ERROR, payload };
  };

  getOneUser = (id: string): UserAction => {
    return { type: UserActionTypes.GET_ONE_USER, payload: id };
  };
  getOneUserSuccess = (payload: User): UserAction => {
    return { type: UserActionTypes.GET_ONE_USER_SUCCESS, payload };
  };
  getOneUserError = (payload: string): UserAction => {
    return { type: UserActionTypes.GET_ONE_USER_ERROR, payload };
  };
  deleteOneUser = (id: string): UserAction => {
    return { type: UserActionTypes.DELETE_ONE_USER, payload: id };
  };
  deleteOneUserSucess = (payload: User): UserAction => {
    return { type: UserActionTypes.DELETE_ONE_USER_SUCCESS, payload };
  };
  deleteOneUserError = (payload: string): UserAction => {
    return { type: UserActionTypes.DELETE_ONE_USER_ERROR, payload };
  };
  updateOneUser = (payload: User): UserAction => {
    return { type: UserActionTypes.UPDATE_ONE_USER, payload };
  };
  updateOneUserSuccess = (payload: User): UserAction => {
    return { type: UserActionTypes.UPDATE_ONE_USER_SUCCESS, payload };
  };
  updateOneUserError = (payload: string): UserAction => {
    return { type: UserActionTypes.UPDATE_ONE_USER_ERROR, payload };
  };
  addOneUser = (payload: User): UserAction => {
    return { type: UserActionTypes.ADD_ONE_USER, payload };
  };
  addOneUserSuccess = (payload: User): UserAction => {
    return { type: UserActionTypes.ADD_ONE_USER_SUCCESS, payload };
  };
  addOneUserError = (payload: string): UserAction => {
    return { type: UserActionTypes.ADD_ONE_USER_ERROR, payload };
  };
  signIn = (payload: { email: string; password: string }): UserAction => {
    return { type: UserActionTypes.SIGN_IN, payload };
  };
  signInSuccess = (payload: User): UserAction => {
    return { type: UserActionTypes.SIGN_IN_SUCCESS, payload };
  };
  signInError = (payload: string): UserAction => {
    return { type: UserActionTypes.SIGN_IN_ERROR, payload };
  };
}
export default new UserActionCreators();
