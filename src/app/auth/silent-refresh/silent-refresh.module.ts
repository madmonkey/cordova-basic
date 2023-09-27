import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SilentRefreshPageRoutingModule } from './silent-refresh-routing.module';

import { SilentRefreshPage } from './silent-refresh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SilentRefreshPageRoutingModule
  ],
  declarations: [SilentRefreshPage]
})
export class SilentRefreshPageModule {}
