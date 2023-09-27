import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, PreloadAllModules, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {canActivate} from "./guard/auth-guard.service";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(next, state)]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'silent-refresh',
    loadChildren: () => import('./auth/silent-refresh/silent-refresh.module').then( m => m.SilentRefreshPageModule)
  },
  {
    path: 'oidc-callback',
    loadChildren: () => import('./auth/oidc-callback/oidc-callback.module').then( m => m.OidcCallbackPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
