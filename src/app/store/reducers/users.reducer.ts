import { Action } from '@ngrx/store';
import { Product } from 'models/product';
import { User } from 'models/user';
import { UsersActions } from 'store/actions';
import { merge, without, clone, find } from 'lodash';

// Define initial state
const initialState: User[] = [];

// reducer function
export function usersReducer(state = initialState, action: UsersActions.Actions): User[] {
  switch (action.type) {
    case UsersActions.ActionTypes.GET_USERS_SUCCESS:
      return [...action.payload];
    default:
      return [...state];
  }
}
