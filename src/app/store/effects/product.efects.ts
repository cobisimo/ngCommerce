import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProductActions } from 'store/actions';
import { Product } from 'models/product';
import { FirebaseService } from 'firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private firebaseService: FirebaseService, private db: AngularFireDatabase) {
  }

  /*@Effect()
  FetchProducts$: Observable<Action> = this.actions$.ofType(actions.ActionTypes.FETCH_PRODUCTS)
    .switchMap(() => this.firebaseService.loadProducts()
      .do((payload: Product[]) => new actions.FetchProductsSuccess(payload))
    );*/

  @Effect()
  FetchProducts$: Observable<Action> = this.actions$.ofType(ProductActions.ActionTypes.GET_PRODUCTS)
    .map((action: ProductActions.GetProducts) => action.payload)
    .mergeMap(() => this.firebaseService.loadProducts())
    .map((products: Product[]) => {
      return new ProductActions.GetProductsSuccess(products);
    });

  @Effect()
  AddProduct$: Observable<Action> = this.actions$.ofType(ProductActions.ActionTypes.EDIT_PRODUCT)
    .switchMap(payload => this.firebaseService.addProduct(payload)
    );

}
