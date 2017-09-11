import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { OrderActions } from 'store/actions';
import { FirebaseService } from 'firebase.service';
import 'rxjs/add/operator/do';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';


@Injectable()
export class OrderEffects {

  constructor(private actions$: Actions, private firebaseService: FirebaseService) {
  }

  @Effect()
  AddOrder$: Observable<Action> = this.actions$
    .ofType(OrderActions.ActionTypes.ADD_ORDER)
    .debounceTime(300)
    .do((payload) => this.firebaseService.addOrder(payload))
    .map((payload) => new OrderActions.AddOrderSuccess(payload))
    .filter(() => true);
}
