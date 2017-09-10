import { Action } from '@ngrx/store';
import { Product } from 'models/product';
import { ProductActions, OrderActions } from 'store/actions';
import { merge, without, clone, find } from 'lodash';

// Define initial state
const initialState: Product[] = [];

// reducer function
export function productReducer(state = initialState, action: ProductActions.Actions): Product[] {
  switch (action.type) {
    case ProductActions.ActionTypes.GET_PRODUCTS_SUCCESS:
      return [...action.payload];
    default:
      return [...state];
  }
}
