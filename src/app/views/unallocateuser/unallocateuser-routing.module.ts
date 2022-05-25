import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnallocateuserPage } from './unallocateuser.page';

const routes: Routes = [
  {
    path: '',
    component: UnallocateuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnallocateuserPageRoutingModule {}
