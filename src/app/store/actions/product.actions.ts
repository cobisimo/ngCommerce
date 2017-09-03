import { Action } from '@ngrx/store';
import { type } from '../util';
import { Product } from 'models/product';

export const ActionTypes = {
  GET_PRODUCTS: type('Get PRODUCTS'),
  GET_PRODUCTS_SUCCESS: type('Get PRODUCTS Success'),
  EDIT_PRODUCT: type('Edit PRODUCT'),
  EDIT_PRODUCT_SUCCESS: type('Edit PRODUCT Success'),
};

export class GetProducts implements Action {
  readonly type = ActionTypes.GET_PRODUCTS;
  constructor(public payload: any) { }
}

export class GetProductsSuccess implements Action {
  readonly type = ActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}

export class AddProduct implements Action {
  readonly type = ActionTypes.EDIT_PRODUCT;
  constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
  readonly type = ActionTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload: string) { }
}

export type Actions
  = GetProducts
  | GetProductsSuccess
  | AddProduct
  | AddProductSuccess;
