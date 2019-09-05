import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Users, Routes } from './constants';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    else {
      const type = this.auth.getUserDetails()["type"];
      if (type == Users.ADMIN) {
        return true;
      }
      else if (type == Users.USER) {
        if (state.url != Routes.VAMAN) {
          this.router.navigateByUrl(Routes.VAMAN);
          return false;
        }
        else return true;
      }
      else if (type == Users.LEAD) {
        if (!this.auth.checkAccess(state.url)) { this.router.navigateByUrl(Routes.HOME); return false; }
        else return true;
      }
      else {
        this.router.navigateByUrl('/');
        return false;
      }
    }
  }
}
