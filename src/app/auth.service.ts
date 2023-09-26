import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  modal: Window | null = null;
  private hasStorage: boolean;
  constructor(public oidcSecurityService: OidcSecurityService) {
    this.hasStorage = typeof Storage !== 'undefined';
  }
  public getRedirectUrl(): string {
    if (this.hasStorage) {
      return sessionStorage.getItem('redirectUrl') ?? '';
    }
    return '';
  }

  public setRedirectUrl(url: string): void {
    if (this.hasStorage) {
      sessionStorage.setItem('redirectUrl', url);
    }
  }
  public removeRedirectUrl(): void {
    sessionStorage.removeItem('redirectUrl');
  }
  get isLoggedIn() {
    console.log('AuthService::isLoggedOn');
    return this.oidcSecurityService.isAuthenticated$;
  }

  get token() {
    console.log('AuthService::token');
    return this.oidcSecurityService.getAccessToken();
  }

  get userData$() {
    console.log('AuthService::userData$');
    return this.oidcSecurityService.userData$;
  }

  checkAuth(url?: string) {
    console.log(`AuthService::checkAuth:${url}`);
    if (this.modal) {
      console.log(`AuthService::checkAuth:close`);
      this.modal.close();
    }

    return this.oidcSecurityService.checkAuth(url);
  }

  doLogin() {
    console.log(`AuthService::doLogin`);
    if(!this.oidcSecurityService.isAuthenticated()) {
      console.log('*not* authenticated');
      const urlHandler = (authUrl: string) => {
        console.log('opening', authUrl);
        this.modal = window.open(authUrl, '_blank');
      };

      this.oidcSecurityService.authorize(undefined, {urlHandler});
    }
    else{
      console.log('***authenticated');
    }
  }

  signOut() {
    console.log(`AuthService::signOut`);
    return this.oidcSecurityService.logoffAndRevokeTokens();
  }
}
