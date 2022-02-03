import {
  AddOneUser,
  GetOneUser,
  UpdateOneUser,
  DeleteOneUser,
  SignIn,
} from "./../../../types/user";
import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "../../../types/user";
import userActionCreators from "../../actions/user/user";
import userAsyncRequest from "../async/user/userAsync";
function* allUsersSaga(): SagaIterator {
  try {
    const response = yield call(userAsyncRequest.getAll);
    yield put(userActionCreators.getAllUsersSuccess(response.data));
  } catch (error) {
    yield put(userActionCreators.getAllUsersError(error as string));
    console.error();
  }
}
function* oneUserSaga(action: GetOneUser): SagaIterator {
  try {
    const response = yield call(userAsyncRequest.getOne, action.payload);
    yield put(userActionCreators.getOneUserSuccess(response.data));
  } catch (error) {
    yield put(userActionCreators.getOneUserError(error as string));
    console.error();
  }
}
function* addOneUser(action: AddOneUser): SagaIterator {
  try {
    const response = yield call(userAsyncRequest.addUser, action.payload);
    yield put(userActionCreators.addOneUserSuccess(response.data));
  } catch (error) {
    yield put(userActionCreators.addOneUserError(error as string));
    console.error();
  }
}
function* deleteOneUser(action: DeleteOneUser): SagaIterator {
  try {
    const response = yield call(userAsyncRequest.deleteOneUser, action.payload);
    yield put(userActionCreators.deleteOneUserSucess(response.data));
  } catch (error) {
    yield put(userActionCreators.deleteOneUserError(error as string));
  }
}
function* updateOneUser(action: UpdateOneUser): SagaIterator {
  try {
    const response = yield call(userAsyncRequest.updateOneUser, action.payload);
    yield put(userActionCreators.updateOneUserSuccess(response.data));
  } catch (error) {
    yield put(userActionCreators.updateOneUserError(error as string));
  }
}
function* signIn(action: SignIn): SagaIterator {
  try {
    const response = yield call(userAsyncRequest.signIn, action.payload);
    yield put(userActionCreators.signInSuccess(response.data));
  } catch (error) {
    yield put(userActionCreators.signInError(error as string));
  }
}

function* signInWatcherSaga() {
  yield takeLatest(UserActionTypes.SIGN_IN, signIn);
}
function* updateOneUserWatcherSags() {
  yield takeLatest(UserActionTypes.UPDATE_ONE_USER, updateOneUser);
}
function* deleteOneUserWatcherSags() {
  yield takeLatest(UserActionTypes.DELETE_ONE_USER, deleteOneUser);
}
function* allUsersWatcherSaga() {
  yield takeLatest(UserActionTypes.GET_ALL_USERS, allUsersSaga);
}
function* oneUsersWatcherSaga() {
  yield takeLatest(UserActionTypes.GET_ONE_USER, oneUserSaga);
}
function* addOneUserWatcherSaga() {
  yield takeLatest(UserActionTypes.ADD_ONE_USER, addOneUser);
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
