import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UsersActions } from 'store/actions';
import { User } from 'models/user';
import { FirebaseService } from 'firebase.service';
import 'rxjs/add/operator/do';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';


@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions, private firebaseService: FirebaseService) {
  }

  @Effect()
  GetUsers$: Observable<Action> = this.actions$
    .ofType(UsersActions.ActionTypes.GET_USERS)
    .debounceTime(300)
    .map((action: UsersActions.GetUsers) => action.payload)
    .mergeMap(() => this.firebaseService.loadUsers())
    .map((users: User[]) => {
      return new UsersActions.GetUsersSuccess(users);
    });

  @Effect()
  UpdateUser$: Observable<Action> = this.actions$
    .ofType(UsersActions.ActionTypes.UPDATE_USER)
    .debounceTime(300)
    .do((payload) => this.firebaseService.updateUser(payload))
    .filter(() => true);

  @Effect()
  DeleteUser$: Observable<Action> = this.actions$
    .ofType(UsersActions.ActionTypes.DELETE_USER)
    .debounceTime(300)
    .do((payload) => this.firebaseService.deleteUser(payload))
    .filter(() => true);
}
