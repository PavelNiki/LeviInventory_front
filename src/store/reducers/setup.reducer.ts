import { reducerWithInitialState } from "typescript-fsa-reducers";
import { SetupState } from "../../types/setup";
import setupAction from "../actions/setup/setup";

const initialState: SetupState = {
  setups: null,
  loading: false,
  currentSetup: null,
  error: null,
};
export const setupReducer = reducerWithInitialState(initialState)
  .case(setupAction.addOneSetup.started, (state): SetupState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(setupAction.addOneSetup.done, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      currentSetup: payload.result,
    };
  })
  .case(setupAction.addOneSetup.failed, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(setupAction.deleteOneSetup.started, (state): SetupState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(setupAction.deleteOneSetup.done, (state): SetupState => {
    return {
      ...state,
      loading: false,
    };
  })
  .case(setupAction.deleteOneSetup.failed, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(setupAction.getAllSetups.started, (state): SetupState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(setupAction.getAllSetups.done, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      setups: payload.result,
    };
  })
  .case(setupAction.getAllSetups.failed, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(setupAction.getOneSetup.started, (state): SetupState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(setupAction.getOneSetup.done, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      currentSetup: payload.result,
    };
  })
  .case(setupAction.getOneSetup.failed, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  })
  .case(setupAction.updateOneSetup.started, (state): SetupState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(setupAction.updateOneSetup.done, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      currentSetup: payload.result,
    };
  })
  .case(setupAction.updateOneSetup.failed, (state, payload): SetupState => {
    return {
      ...state,
      loading: false,
      error: payload.error,
    };
  });
