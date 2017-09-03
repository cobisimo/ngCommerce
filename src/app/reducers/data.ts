import { Action } from '@ngrx/store';
import { Product } from '../models/product';
import * as DataActions from '../actions/data';
import { merge, without, clone, find } from 'lodash';

// Define state
export interface State {
  loading: boolean; // indicates loading while fetching data
  products: Product[];
}

// Define initial state
const initialState: State = {
  loading: false,
  products: []
};

// reducer function
export function reducer(state = initialState, action: DataActions.Actions): State {
  switch (action.type) {
    case DataActions.ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case DataActions.ActionTypes.FETCH_PRODUCTS_SUCCESS: {
      return {
        loading: false,
        products: action.payload
      };
    }
    case DataActions.ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case DataActions.ActionTypes.ADD_PRODUCT_SUCCESS: {
      return {
        loading: false,
        products: action.payload
      };
    }
    default:
      return state;
  }
}
