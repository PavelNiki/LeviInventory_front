import {
  InventoryAction,
  InventoryActionTypes,
  InventoryState,
} from "../../types/inventory";

const initialState: InventoryState = {
  inventory: [],
  loading: false,
  currentInventory: null,
  freeInventory: null,
  inventoryList: null,
  error: null,
};
export const inventoryReducer = (
  state = initialState,
  action: InventoryAction
) => {
  switch (action.type) {
    case InventoryActionTypes.GET_ALL_INVENTORY:
      return {
        ...state,
        loading: true,
      };
    case InventoryActionTypes.GET_ALL_INVENTORY_SUCCESS:
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null,
      };
    case InventoryActionTypes.GET_ALL_INVENTORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case InventoryActionTypes.GET_FREE_INVENTORY:
      return {
        ...state,

        loading: true,
      };
    case InventoryActionTypes.GET_FREE_INVENTORY_SUCCESS:
      return {
        ...state,
        freeInventory: action.payload,
        loading: false,
      };
    case InventoryActionTypes.GET_FREE_INVENTORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case InventoryActionTypes.UPDATE_ONE_INVENTORY:
      return {
        ...state,
        loading: true,
      };
    case InventoryActionTypes.UPDATE_ONE_INVENTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        currentInventory: action.payload,
      };
    case InventoryActionTypes.UPDATE_ONE_INVENTORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case InventoryActionTypes.MAKE_AN_INVENTORY:
      return {
        ...state,
        loading: true,
      };
    case InventoryActionTypes.MAKE_AN_INVENTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        inventoryList: action.payload,
      };
    case InventoryActionTypes.MAKE_AN_INVENTORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case InventoryActionTypes.ADD_MANY_INVENTORY:
      return {
        ...state,
        loading: true,
      };
    case InventoryActionTypes.ADD_MANY_INVENTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        inventory: action.payload,
      };
    case InventoryActionTypes.ADD_MANY_INVENTORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case InventoryActionTypes.ADD_ONE_INVENTORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case InventoryActionTypes.ADD_ONE_INVENTORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentInventory: action.payload,
      };
    }
    case InventoryActionTypes.ADD_ONE_INVENTORY_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case InventoryActionTypes.DELETE_ONE_INVENTORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case InventoryActionTypes.DELETE_ONE_INVENTORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentInventory: action.payload,
      };
    }
    case InventoryActionTypes.DELETE_ONE_INVENTORY_ERROR: {
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
