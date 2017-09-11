import { Action } from '@ngrx/store';
import { Product } from 'models/product';
import { User } from 'models/user';
import { UserActions } from 'store/actions';
import { merge, without, clone, find } from 'lodash';

// Define initial state
const initialState: User = null;

// reducer function
export function userReducer(state = initialState, action: UserActions.Actions): User {
  switch (action.type) {
    case UserActions.ActionTypes.GET_USER_SUCCESS:
      return {...action.payload, uid: action.payload.$key};
    case UserActions.ActionTypes.LOGOUT_USER:
      return null;
    default:
      return state ? {...state} : null;
  }
}
