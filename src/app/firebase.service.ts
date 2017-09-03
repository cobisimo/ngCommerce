import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  private products$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  loadProducts() {
    this.products$ = this.db.list('/products');
    return this.products$;
  }

  addProduct(data) {
    return this.products$.push(data.payload);
  }
}
