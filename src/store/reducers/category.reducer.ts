import { reducerWithInitialState } from "typescript-fsa-reducers";
import { CategoryState } from "../../types/category";
import categoryAction from "../actions/category/category";

const initialState: CategoryState = {
  categories: null,
  currentCategory: null,
  loading: false,
  error: null,
};
export const categoryReducer = reducerWithInitialState(initialState)
  .case(categoryAction.addManyCategories.started, (state): CategoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    categoryAction.addManyCategories.done,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
      };
    }
  )
  .case(
    categoryAction.addManyCategories.failed,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(categoryAction.addOneCategory.started, (state): CategoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(categoryAction.addOneCategory.done, (state, payload): CategoryState => {
    return {
      ...state,
      loading: false,
      currentCategory: payload.result,
    };
  })
  .case(
    categoryAction.addOneCategory.failed,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(categoryAction.deleteOneCategory.started, (state): CategoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    categoryAction.deleteOneCategory.done,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        currentCategory: null,
      };
    }
  )
  .case(
    categoryAction.deleteOneCategory.failed,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(categoryAction.getAllCategories.started, (state): CategoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    categoryAction.getAllCategories.done,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        categories: payload.result,
      };
    }
  )
  .case(
    categoryAction.getAllCategories.failed,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(categoryAction.getOneCategory.started, (state): CategoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(categoryAction.getOneCategory.done, (state, payload): CategoryState => {
    return {
      ...state,
      loading: false,
      currentCategory: payload.result,
    };
  })
  .case(
    categoryAction.getOneCategory.failed,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  )
  .case(categoryAction.updateOneCategory.started, (state): CategoryState => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(
    categoryAction.updateOneCategory.done,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        currentCategory: payload.result,
      };
    }
  )
  .case(
    categoryAction.updateOneCategory.failed,
    (state, payload): CategoryState => {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
  );
