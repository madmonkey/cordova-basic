import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OidcCallbackPageRoutingModule } from './oidc-callback-routing.module';

import { OidcCallbackPage } from './oidc-callback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OidcCallbackPageRoutingModule
  ],
  declarations: [OidcCallbackPage]
})
export class OidcCallbackPageModule {}
