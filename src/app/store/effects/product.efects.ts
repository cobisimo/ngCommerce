import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProductActions } from 'store/actions';
import { Product } from 'models/product';
import { FirebaseService } from 'firebase.service';
import 'rxjs/add/operator/do';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private firebaseService: FirebaseService) {
  }

  @Effect()
  GetProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.ActionTypes.GET_PRODUCTS)
    .debounceTime(300)
    .map((action: ProductActions.GetProducts) => action.payload)
    .mergeMap(() => this.firebaseService.loadProducts())
    .map((products: Product[]) => {
      return new ProductActions.GetProductsSuccess(products);
    });

  @Effect()
  AddProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.ActionTypes.ADD_PRODUCT)
    .debounceTime(300)
    .do((payload) => this.firebaseService.addProduct(payload))
    .filter(() => true);

  @Effect()
  UpdateProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.ActionTypes.UPDATE_PRODUCT)
    .debounceTime(300)
    .do((payload) => this.firebaseService.updateProduct(payload))
    .filter(() => true);

  @Effect()
  DeleteProduct$: Observable<Action> = this.actions$
    .ofType(ProductActions.ActionTypes.DELETE_PRODUCT)
    .debounceTime(300)
    .do((payload) => this.firebaseService.deleteProduct(payload))
    .filter(() => true);
}
