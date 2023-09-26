import {inject, Injectable, NgZone} from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {
  authInfo$: Observable<LoginResponse> | undefined;

  constructor(private router: Router,
              private authService: AuthService,
              private zone: NgZone) {
  }

  login() {
    console.log('login');
    this.authService.doLogin();
  }
}
export const canActivate = (route: ActivatedRouteSnapshot,
                            state: RouterStateSnapshot) => {
  //const authService = inject(AuthService);
  // const router = inject(Router);
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
}
