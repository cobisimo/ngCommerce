import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Product } from 'models/product';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'auth.service';
import { User } from 'models/user';
import { Order } from 'models/order';

@Injectable()
export class FirebaseService {
  private products$: FirebaseListObservable<Product[]>;
  private orders$: FirebaseListObservable<Order[]>;
  private users$: FirebaseListObservable<User[]>;
  private user$: FirebaseListObservable<any>;

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

  getUser(user): any {
    this.db.object(`/users/${user.uid}`).$ref.on('value', (snapshot) => {
      if (snapshot.exists()) {
        snapshot.ref.off();
        return snapshot.val();
      } else {
        this.db.object(`users/${user.uid}`).update({
          'name': user.displayName,
          'email': user.email,
          'role': 'USER'
        });
      }
    });
    return this.db.object(`/users/${user.uid}`);
  }

  loadUsers() {
    this.users$ = this.db.list('/users');
    return this.users$;
  }

  updateUser(data) {
    const key = data.payload.$key;
    delete data.payload.$key;
    return this.db.object(`/users/${key}`).update(data.payload);
  }

  deleteUser(data) {
    return this.db.object(`/users/${data.payload.$key}`).remove();
  }

  updateProfile(data) {
    this.db.object(`/users/${data.payload.uid}`).update(data.payload.data);
  }
}
