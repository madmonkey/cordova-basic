import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OidcCallbackPage } from './oidc-callback.page';

const routes: Routes = [
  {
    path: '',
    component: OidcCallbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OidcCallbackPageRoutingModule {}
