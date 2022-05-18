import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogcallPageRoutingModule } from './logcall-routing.module';

import { LogcallPage } from './logcall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogcallPageRoutingModule
  ],
  declarations: [LogcallPage]
})
export class LogcallPageModule {}
