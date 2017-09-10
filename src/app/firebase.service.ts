import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Product } from 'models/product';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService {
  private products$: FirebaseListObservable<any[]>;
  private orders$: FirebaseListObservable<any[]>;
  private users$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

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

  deleteProduct(data) {
    return this.db.object(`/products/${data.payload.$key}`).remove();
  }

  addOrder(data) {
    this.orders$ = this.db.list('/orders');
    data.payload.uid = this.afAuth.auth.currentUser.uid;
    return this.orders$.push(data.payload);
  }

  getUsers() {
    this.users$ = this.db.list('/users');
    return this.users$;
  }

  initUser(uid) {
    console.log(uid);
    this.db.object(`/users/${uid}`).$ref.once('value', (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot);
        alert('exist');
      } else {
        alert('not exist');
        this.db.object(`users/${uid}`).update({
          'role': 'USER'
        }).then((res) => {
          console.log(res);
        }).catch(error => console.log(error));
      }
    });
    // return this.users$.push(data.payload);
  }

  updateProfile(data) {
    const uid = this.afAuth.auth.currentUser.uid;
    this.db.object(`/products/${uid}`).update(data);
  }
}
