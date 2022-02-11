import { UserActionTypes, UserState } from "../../types/user";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import userAction from "../actions/user/user";
const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};
export const userReducer = reducerWithInitialState(initialState)
  .case(userAction.addOneUser.started, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(userAction.addOneUser.done, (state, payload) => {
    return {
      ...state,
      loading: false,
      currentUser: payload.result,
    };
  })
  .case(userAction.addOneUser.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(userAction.deleteOneUser.started, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(userAction.deleteOneUser.done, (state, payload) => {
    return {
      ...state,
      loading: false,
      currentUser: payload.result,
    };
  })
  .case(userAction.deleteOneUser.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(userAction.getAllUsers.started, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(userAction.getAllUsers.done, (state, payload) => {
    return {
      ...state,
      loading: false,
      user: payload.result,
    };
  })
  .case(userAction.getAllUsers.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(userAction.getOneUser.started, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(userAction.getOneUser.done, (state, payload) => {
    return {
      ...state,
      loading: false,
      currentUser: payload.result,
    };
  })
  .case(userAction.getOneUser.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(userAction.updateOneUser.started, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(userAction.updateOneUser.done, (state, payload) => {
    return {
      ...state,
      loading: false,
      currentUser: payload.result,
    };
  })
  .case(userAction.updateOneUser.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(userAction.signIn.started, (state) => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(userAction.signIn.done, (state, payload) => {
    return {
      ...state,
      loading: false,
      currentUser: payload.result,
    };
  })
  .case(userAction.signIn.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  });
