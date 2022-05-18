import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllocateincidentPageRoutingModule } from './allocateincident-routing.module';

import { AllocateincidentPage } from './allocateincident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllocateincidentPageRoutingModule
  ],
  declarations: [AllocateincidentPage]
})
export class AllocateincidentPageModule {}
