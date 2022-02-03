import { Action } from "typescript-fsa";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { call, takeLatest, all } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { AxiosResponse } from "axios";
import setupAction from "../../actions/setup/setup";
import setupAsync from "../async/setup/setupAsync";

import { Setup } from "../../../types/setup";

const getAllSetups = bindAsyncAction(setupAction.getAllSetups, {
  skipStartedAction: true,
})(function* (): SagaIterator {
  const response: AxiosResponse = yield call(setupAsync.getAllSetups);
  return response.data;
});
const getOneSetup = bindAsyncAction(setupAction.getOneSetup, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse = yield call(setupAsync.getOneSetup, id);
  return response.data;
});
const addOneSetup = bindAsyncAction(setupAction.addOneSetup, {
  skipStartedAction: true,
})(function* (setup): SagaIterator {
  const response: AxiosResponse = yield call(setupAsync.addOneSetup, setup);
  return response.data;
});
const deleteOneSetup = bindAsyncAction(setupAction.deleteOneSetup, {
  skipStartedAction: true,
})(function* (id): SagaIterator {
  const response: AxiosResponse = yield call(setupAsync.deleteOneSetup, id);
  return response.data;
});
const updateOneSetup = bindAsyncAction(setupAction.updateOneSetup, {
  skipStartedAction: true,
})(function* (setup): SagaIterator {
  const response: AxiosResponse = yield call(setupAsync.updateOneSetup, setup);
  return response.data;
});
function* getOneSetupWatcheR() {
  yield takeLatest(
    setupAction.getOneSetup.started,
    (action: Action<number>) => {
      return getOneSetup(action.payload);
    }
  );
}
function* getAllSetupsWatcher() {
  yield takeLatest(setupAction.getAllSetups.started, getAllSetups);
}
function* addOneSetupWatcher() {
  yield takeLatest(setupAction.addOneSetup.started, (action: Action<Setup>) => {
    return addOneSetup(action.payload);
  });
}
function* updateOneSetupWatcher() {
  yield takeLatest(
    setupAction.updateOneSetup.started,
    (action: Action<Setup>) => {
      return updateOneSetup(action.payload);
    }
  );
}
function* deleteOneSetupWatcher() {
  yield takeLatest(
    setupAction.deleteOneSetup.started,
    (action: Action<number>) => {
      return deleteOneSetup(action.payload);
    }
  );
}
export function* setupWatcher() {
  yield all([
    getOneSetupWatcheR(),
    getAllSetupsWatcher(),
    addOneSetupWatcher(),
    updateOneSetupWatcher(),
    deleteOneSetupWatcher(),
  ]);
}
