import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllocateincidentPage } from './allocateincident.page';

const routes: Routes = [
  {
    path: '',
    component: AllocateincidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllocateincidentPageRoutingModule {}
