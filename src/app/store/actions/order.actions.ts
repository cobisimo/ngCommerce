import { Action } from '@ngrx/store';
import { type } from '../util';
import { Product } from 'models/product';
import { Order } from 'models/order';

export const ActionTypes = {
  ADD_ORDER: type('ADD_ORDER'),
  ADD_ORDER_SUCCESS: type('ADD_ORDER_SUCCESS'),
  GET_ORDER: type('GET_ORDER'),
  ADD_PRODUCT: type('ADD_PRODUCT'),
  REMOVE_PRODUCT: type('REMOVE_PRODUCT'),
};

export class GetOrder implements Action {
  readonly type = ActionTypes.GET_ORDER;
  constructor(public payload: Product) { }
}

export class AddOrder implements Action {
  readonly type = ActionTypes.ADD_ORDER;
  constructor(public payload: Order) { }
}

export class AddOrderSuccess implements Action {
  readonly type = ActionTypes.ADD_ORDER_SUCCESS;
  constructor(public payload: any) { }
}

export class AddProduct implements Action {
  readonly type = ActionTypes.ADD_PRODUCT;
  constructor(public payload: Product) { }
}

export class RemoveProduct implements Action {
  readonly type = ActionTypes.REMOVE_PRODUCT;
  constructor(public payload: Product) { }
}

export type Actions
  = AddOrder
  | AddOrderSuccess
  | GetOrder
  | AddProduct
  | RemoveProduct;
