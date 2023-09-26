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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
