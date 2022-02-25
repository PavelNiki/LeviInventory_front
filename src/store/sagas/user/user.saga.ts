import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { call, takeLatest, all } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { AxiosResponse } from "axios";
import userAction from "../../actions/user/user";
import userAsync from "../async/user/userAsync";
import { User } from "../../../types/user";

const getAllUsers = bindAsyncAction(userAction.getAllUsers, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse<User[]> = yield call(userAsync.getAll);
  return response.data;
});

const getOneUser = bindAsyncAction(userAction.getOneUser, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<User> = yield call(userAsync.getOne, id);
  return response.data;
});

const addOneUser = bindAsyncAction(userAction.addOneUser, {
  skipStartedAction: true,
})(function* (user): SagaIterator {
  const response: AxiosResponse<User> = yield call(userAsync.addUser, user);
  return response.data;
});

const deleteOneUser = bindAsyncAction(userAction.deleteOneUser, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse<User> = yield call(userAsync.deleteOneUser, id);
  return response.data;
});

const updateOneUser = bindAsyncAction(userAction.updateOneUser, {
  skipStartedAction: true,
})(function* (user): SagaIterator {
  const response: AxiosResponse<User> = yield call(
    userAsync.updateOneUser,
    user
  );
  return response.data;
});

const signIn = bindAsyncAction(userAction.signIn, {
  skipStartedAction: true,
})(function* (user): SagaIterator {
  const response: AxiosResponse<User> = yield call(userAsync.signIn, user);
  return response.data;
});

function* signInWatcherSaga() {
  yield takeLatest(
    userAction.signIn.started,
    (action: Action<{ email: string; password: string }>) => {
      return signIn(action.payload);
    }
  );
}
function* updateOneUserWatcherSags() {
  yield takeLatest(userAction.updateOneUser.started, (action: Action<User>) => {
    return updateOneUser(action.payload);
  });
}
function* deleteOneUserWatcherSags() {
  yield takeLatest(
    userAction.deleteOneUser.started,
    (action: Action<number>) => {
      return deleteOneUser(action.payload);
    }
  );
}
function* allUsersWatcherSaga() {
  yield takeLatest(userAction.getAllUsers.started, getAllUsers);
}
function* oneUsersWatcherSaga() {
  yield takeLatest(userAction.getOneUser.started, (action: Action<number>) => {
    return getOneUser(action.payload);
  });
}
function* addOneUserWatcherSaga() {
  yield takeLatest(userAction.addOneUser.started, (action: Action<User>) => {
    return addOneUser(action.payload);
  });
}

export default function* usersWatcherSaga() {
  yield all([
    allUsersWatcherSaga(),
    oneUsersWatcherSaga(),
    addOneUserWatcherSaga(),
    deleteOneUserWatcherSags(),
    updateOneUserWatcherSags(),
    signInWatcherSaga(),
  ]);
}
