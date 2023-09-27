import { Injectable } from '@angular/core';
import { AuthConfigModule} from "./auth/auth-config.module";

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  modal: Window | null = null;
  private hasStorage: boolean;
  private loggedIn: boolean = false;
  private instance: any = _window();
  constructor(private authConfigModule: AuthConfigModule) {
    this.hasStorage = typeof Storage !== 'undefined';
    this.instance.addEventListener('message', (event: { data: string; }) => {
      if (event.data.match(/^oauth::/)) {
        var data = JSON.parse(event.data.substring(7));
        console.table(event.data);
        console.table(data);
        // Use data.code
      }
    });
    this.instance.handleOpenURL = function(url: string | URL) {
      console.log(">>>>>>>>>>>>>>>>>>>");
      // do stuff, for example
      // document.getElementById("url").value = url;
      console.log(url);
    };
  }
  get cordova(): any {
    return _window().cordova;
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
    return this.loggedIn;
  }

  get token() {
    console.log('AuthService::token');
    return '';
  }

  get userData$() {
    console.log('AuthService::userData$');
    return '';

  }

  checkAuth(url?: string) {
    console.log(`AuthService::checkAuth:${url}`);
    if (this.modal) {
      console.log(`AuthService::checkAuth:close`);
      this.modal.close();
    }


  }

  doLogin() {
    console.log(`AuthService::doLogin`);
    var endpoint = this.authConfigModule.formattedUrl();
    console.log(endpoint);
    // this.cordova.InAppBrowser.open(endpoint,'oauth:app-dci', 'location=no')
    this.instance.open(endpoint, 'oauth:app-dci');
  }

  signOut() {
    console.log(`AuthService::signOut`);

  }
}
