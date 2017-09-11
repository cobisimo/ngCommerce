import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

import { UserActions } from 'store/actions';
import { FirebaseService } from 'firebase.service';
import { User } from 'models/user';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private firebaseService: FirebaseService) {
  }

  @Effect()
  GetUser$: Observable<Action> = this.actions$
    .ofType(UserActions.ActionTypes.GET_USER)
    .debounceTime(300)
    .map((action: UserActions.GetUser) => action.payload)
    .mergeMap((payload) => this.firebaseService.getUser(payload))
    .map((user: User) => {
      return new UserActions.GetUserSuccess(user);
    });

  @Effect()
  UpdateProfile$: Observable<Action> = this.actions$
    .ofType(UserActions.ActionTypes.UPDATE_PROFILE)
    .debounceTime(300)
    .do((payload) => this.firebaseService.updateProfile(payload))
    .filter(() => true);
}
