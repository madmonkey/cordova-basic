import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    /*
    AuthModule.forRoot({
      config: {
        authority: 'http://10.0.2.2:44330',
        redirectUrl: 'app-dci://oidc-callback',
        postLogoutRedirectUri: 'app-dci://oidc-callback',
        clientId: 'mobile_web',
        scope: 'openid profile email',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
        logLevel: LogLevel.Debug,


     */

  ],
  // exports: [AuthModule],
})
export class AuthConfigModule {
  client_id: string = 'mobile_web';
  response_type = 'code';
  scope: string = 'openid profile email';
  authority: string = 'http://10.0.2.2:44330/connect/authorize';
  redirectUrl: string = "app-dci://oidc-callback";
  token_url: string ='http://10.0.2.2:44330/connect/token';
  secret: string ='';

  requestParameters = ()=>{
    return `client_id=${encodeURIComponent(this.client_id)}&response_type=${encodeURIComponent(this.response_type)}&scope=${encodeURIComponent(this.scope)}&redirect_uri=${encodeURIComponent(this.redirectUrl)}`;
  }
  requestBody =(code: string)=> {
    return {
    client_id: `${encodeURIComponent(this.client_id)}`,
    client_secret: `--redacted--`,
    redirect_uri: `${encodeURIComponent(this.redirectUrl)}`,
    grant_type: `authorization_code`
  };
  }
  formattedUrl =()=>{
    return `${this.authority}?${this.requestParameters()}`;
  }
}


