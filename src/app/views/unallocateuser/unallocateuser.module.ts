import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnallocateuserPageRoutingModule } from './unallocateuser-routing.module';

import { UnallocateuserPage } from './unallocateuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnallocateuserPageRoutingModule
  ],
  declarations: [UnallocateuserPage]
})
export class UnallocateuserPageModule {}
