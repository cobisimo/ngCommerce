import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Product } from 'models/product';

@Injectable()
export class FirebaseService {
  private products$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  loadProducts() {
    this.products$ = this.db.list('/products');
    return this.products$;
  }

  getProduct(key) {
    return this.db.object(`/products/${key}`);
  }

  addProduct(data) {
    return this.products$.push(data.payload);
  }

  updateProduct(data) {
    const key = data.payload.$key;
    delete data.payload.$key;
    return this.db.object(`/products/${key}`).update(data.payload);
  }

  deleteProduct(product: Product) {
    return this.db.object(`/products/${product.$key}`).remove();
  }
}
