import {inject, Injectable, NgZone} from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';

import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {


  constructor(private authService: AuthService) {
  }


}
export const canActivate = (route: ActivatedRouteSnapshot,
                            state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  if(authService.isLoggedIn){
    return true;
  }
  else {
    authService.doLogin();
    return false;
  }
 /*
  const security = inject(OidcSecurityService);
  const authService = inject(AuthService);
  console.table(security);
    if (security.isAuthenticated()) {
      return true;
    }
    else {
      // Stores the attempted URL for redirecting.
      authService.setRedirectUrl(state.url);
      // Not signed in so redirects to signin page.
      security.authorize()
      return false;
    }

  */

}
