import { Action } from '@ngrx/store';
import { type } from '../util';
import { Product } from '../models/product';

export const ActionTypes = {
  FETCH_PRODUCTS: type('[Data] Fetch PRODUCTS'),
  FETCH_PRODUCTS_SUCCESS: type('[Data] Fetch PRODUCTS Success'),
  ADD_PRODUCT: type('[Data] Add PRODUCT'),
  ADD_PRODUCT_SUCCESS: type('[Data] Add PRODUCT Success'),
};

export class FetchProducts implements Action {
  readonly type = ActionTypes.FETCH_PRODUCTS;
  constructor(public payload: any) { }
}

export class FetchProductsSuccess implements Action {
  readonly type = ActionTypes.FETCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}

export class AddProduct implements Action {
  readonly type = ActionTypes.ADD_PRODUCT;
  constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
  readonly type = ActionTypes.ADD_PRODUCT_SUCCESS;
  constructor(public payload: string) { }
}

export type Actions
  = FetchProducts
  | FetchProductsSuccess
  | AddProduct
  | AddProductSuccess;
