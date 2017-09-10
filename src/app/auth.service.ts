import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { FirebaseService } from 'firebase.service';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private firebaseService: FirebaseService) {
    this.user = firebaseAuth.authState;
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  login() {
    this.firebaseAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((response) => {
        this.firebaseService.initUser(response.user.uid);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
