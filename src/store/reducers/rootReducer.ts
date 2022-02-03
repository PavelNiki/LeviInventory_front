import { inventoryReducer } from "./inventory.reducer";
import { roomReducer } from "./room.reducer";
import { userReducer } from "./user.reducer";
import { categoryReducer } from "./category.reducer";
import { combineReducers } from "redux";
import { setupReducer } from "./setup.reducer";

export const rootReducer = combineReducers({
  users: userReducer,
  rooms: roomReducer,
  inventory: inventoryReducer,
  category: categoryReducer,
  setup: setupReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
