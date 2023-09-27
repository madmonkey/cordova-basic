import { Injectable } from '@angular/core';
import { AuthConfigModule} from "./auth/auth-config.module";
import {HttpClient} from "@angular/common/http";

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
  private static client: HttpClient;
  constructor(private authConfigModule: AuthConfigModule) {
    this.hasStorage = typeof Storage !== 'undefined';
    //this.client = client;
    this.instance.addEventListener('message', (event: { data: string; }) => {
      console.log('event listener - hit');
      console.table(event);
      if (event.data.match(/^oauth::/)) {
        var data = JSON.parse(event.data.substring(7));
        console.table(event.data);

        // Use data.code
      }
    });
    this.instance.addEventListener('code', (event:any) => {
      console.table(event);
    });
    this.instance.handleOpenURL = async (url: string) => {
        console.log(">>>>>>>>>>>>>>>>>>>");
        console.log(url);
        const urlParameters = new URLSearchParams(url);
        /* extremely problematic to launch a post request this way */
        const code = urlParameters.get('code');
        if (code) {
          // this.instance.document.dispatchEvent("code",{code: code})
          /*
              client.post(authConfigModule.token_url, authConfigModule.requestBody).subscribe(response => {
              console.log('token::post');
              console.table(response);


              //this.instance.ev
            })
           */
        }
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
