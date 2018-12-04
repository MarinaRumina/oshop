import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AppUser } from './models/app.user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  path: import("c:/Marina-docs/Repos/angular-learning/oshop/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot[];
  route: import("c:/Marina-docs/Repos/angular-learning/oshop/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate (): Observable<boolean> {
    return this.auth.appUser$
                    .pipe(map((appUser: AppUser) => appUser.isAdmin));
  }
}
