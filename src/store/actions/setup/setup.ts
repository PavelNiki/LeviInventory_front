import actionCreatorFactory from "typescript-fsa";
import { Setup, SetupActionTypes } from "../../../types/setup";
const actionCreator = actionCreatorFactory();
class SetupActionCreator {
  getOneSetup = actionCreator.async<number, Setup>(SetupActionTypes.GET_ONE);
  getAllSetups = actionCreator.async<void, Setup[]>(SetupActionTypes.GET_MANY);
  addOneSetup = actionCreator.async<Setup, Setup>(SetupActionTypes.ADD_ONE);
  deleteOneSetup = actionCreator.async<number, Setup>(
    SetupActionTypes.DELETE_ONE
  );
  updateOneSetup = actionCreator.async<Setup, Setup>(
    SetupActionTypes.UPDATE_ONE
  );
}
export default new SetupActionCreator();
