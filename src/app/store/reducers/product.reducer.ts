import { Action } from '@ngrx/store';
import { Product } from 'models/product';
import { ProductActions } from 'store/actions';
import { merge, without, clone, find } from 'lodash';

// Define state
export interface State {
  data: Product[];
}

// Define initial state
const initialState: State = {
  data: []
};

// reducer function
export function productReducer(state = initialState, action: ProductActions.Actions): State {
  switch (action.type) {
    case ProductActions.ActionTypes.GET_PRODUCTS:
      return {
        ...state
      };
    case ProductActions.ActionTypes.GET_PRODUCTS_SUCCESS: {
      return {
        data: action.payload
      };
    }
    case ProductActions.ActionTypes.ADD_PRODUCT:
      return {
        ...state
      };
    default:
      return state;
  }
}
