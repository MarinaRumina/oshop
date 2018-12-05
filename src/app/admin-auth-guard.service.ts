import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot  } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AppUser } from './models/app.user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate (): Observable<boolean> {
    let isAdm = this.auth.appUser$.pipe(map((appUser: AppUser) => {
        if (appUser.isAdmin) {
          return true;
        }
        return false;
      })
    );
    return isAdm;
  }
}
