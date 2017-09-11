import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'models/user';

@Injectable()
export class UserGuard implements CanActivate {
  user: Observable<User>;

  constructor(private userStore: Store<{ user: User }>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.user = this.userStore.select('user');
    return this.user.map(user => user !== null);
  }
}
