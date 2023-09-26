import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
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
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
