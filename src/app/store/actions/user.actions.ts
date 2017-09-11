import { Action } from '@ngrx/store';
import { type } from '../util';
import { Order } from 'models/order';
import { User } from 'models/user';

export const ActionTypes = {
  GET_USER: type('GET_USER'),
  GET_USER_SUCCESS: type('GET_USER_SUCCESS'),
  LOGOUT_USER: type('LOGOUT_USER')
};

export class GetUser implements Action {
  readonly type = ActionTypes.GET_USER;
  constructor(public payload: any) { }
}

export class GetUserSuccess implements Action {
  readonly type = ActionTypes.GET_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class LogoutUser implements Action {
  readonly type = ActionTypes.LOGOUT_USER;
  constructor(public payload?: any) { }
}

export type Actions
  = GetUser
  | GetUserSuccess
  | LogoutUser;
