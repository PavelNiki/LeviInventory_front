import { UserActionTypes, UserState, UserAction } from "../../types/user";

const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};
export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_ALL_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case UserActionTypes.GET_ALL_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.GET_ONE_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.GET_ONE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case UserActionTypes.GET_ONE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.DELETE_ONE_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.DELETE_ONE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case UserActionTypes.DELETE_ONE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.UPDATE_ONE_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.UPDATE_ONE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    }
    case UserActionTypes.UPDATE_ONE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case UserActionTypes.ADD_ONE_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case UserActionTypes.ADD_ONE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    }
    case UserActionTypes.ADD_ONE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case UserActionTypes.SIGN_IN: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    }
    case UserActionTypes.SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
