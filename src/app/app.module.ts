import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AuthConfigModule} from "./auth/auth-config.module";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AuthConfigModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
