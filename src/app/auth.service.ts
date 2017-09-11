import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { UserActions } from 'store/actions';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private userStore: Store<{ order: User }>) {
    this.user = firebaseAuth.authState;
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }

  login() {
    this.firebaseAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((response) => {
        this.userStore.dispatch(new UserActions.GetUser(response.user));
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then((res) => {
        this.userStore.dispatch(new UserActions.LogoutUser());
      });
  }
}
