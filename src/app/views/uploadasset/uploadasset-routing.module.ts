import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadassetPage } from './uploadasset.page';

const routes: Routes = [
  {
    path: '',
    component: UploadassetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadassetPageRoutingModule {}
