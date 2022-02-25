import { InventoryState } from "../../types/inventory";
import inventoryAction from "../actions/inventory/inventory";
import { reducerWithInitialState } from "typescript-fsa-reducers";
const initialState: InventoryState = {
  inventory: [],
  loading: false,
  currentInventory: null,
  freeInventory: null,
  inventoryList: null,
  error: null,
};
export const inventoryReducer = reducerWithInitialState(initialState)
  .case(
    inventoryAction.addManyInventoryItems.started,
    (state): InventoryState => {
      return {
        ...state,
        loading: true,
      };
    }
  )
  .case(inventoryAction.addManyInventoryItems.done, (state): InventoryState => {
    return {
      ...state,
      loading: false,
    };
  })
  .case(
    inventoryAction.addManyInventoryItems.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(
    inventoryAction.addOneInventoryItem.started,
    (state): InventoryState => {
      return {
        ...state,
        loading: true,
      };
    }
  )
  .case(
    inventoryAction.addOneInventoryItem.done,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        currentInventory: payload.result,
      };
    }
  )
  .case(
    inventoryAction.addOneInventoryItem.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(inventoryAction.deleteOneInventory.started, (state): InventoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    inventoryAction.deleteOneInventory.done,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        currentInventory: payload.result,
      };
    }
  )
  .case(
    inventoryAction.deleteOneInventory.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(inventoryAction.getAllInventory.started, (state): InventoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    inventoryAction.getAllInventory.done,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        inventory: payload.result,
      };
    }
  )
  .case(
    inventoryAction.getAllInventory.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(inventoryAction.getFreeInventory.started, (state): InventoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    inventoryAction.getFreeInventory.done,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        freeInventory: payload.result,
      };
    }
  )
  .case(
    inventoryAction.getFreeInventory.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(inventoryAction.makeInventory.started, (state): InventoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    inventoryAction.makeInventory.done,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        inventoryList: payload.result,
      };
    }
  )
  .case(
    inventoryAction.makeInventory.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(
    inventoryAction.updateInventoryItem.started,
    (state): InventoryState => {
      return {
        ...state,
        loading: true,
      };
    }
  )
  .case(
    inventoryAction.updateInventoryItem.done,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        currentInventory: payload.result,
      };
    }
  )
  .case(
    inventoryAction.updateInventoryItem.failed,
    (state, payload): InventoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  );
