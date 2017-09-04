import { Action } from '@ngrx/store';
import { type } from '../util';
import { Product } from 'models/product';

export const ActionTypes = {
  GET_PRODUCTS: type('Get PRODUCTS'),
  GET_PRODUCTS_SUCCESS: type('Get PRODUCTS Success'),
  ADD_PRODUCT: type('Add PRODUCT'),
  UPDATE_PRODUCT: type('Edit PRODUCT'),
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
  readonly type = ActionTypes.ADD_PRODUCT;
  constructor(public payload: Product) { }
}

export class UpdateProduct implements Action {
  readonly type = ActionTypes.UPDATE_PRODUCT;
  constructor(public payload: any) { }
}

export type Actions
  = GetProducts
  | GetProductsSuccess
  | AddProduct
  | UpdateProduct;