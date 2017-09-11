import { Action } from '@ngrx/store';
import { type } from '../util';
import { User } from 'models/user';

export const ActionTypes = {
  GET_USERS: type('GET_USERS'),
  GET_USERS_SUCCESS: type('GET_USERS_SUCCESS'),
  UPDATE_USER: type('UPDATE_USER'),
  DELETE_USER: type('DELETE_USER'),
};

export class GetUsers implements Action {
  readonly type = ActionTypes.GET_USERS;
  constructor(public payload: any) { }
}

export class GetUsersSuccess implements Action {
  readonly type = ActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}

export class UpdateUser implements Action {
  readonly type = ActionTypes.UPDATE_USER;
  constructor(public payload: User) { }
}

export class DeleteUser implements Action {
  readonly type = ActionTypes.DELETE_USER;
  constructor(public payload: User) { }
}

export type Actions
  = GetUsers
  | GetUsersSuccess
  | UpdateUser
  | DeleteUser;
