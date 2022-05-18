import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogcallPage } from './logcall.page';

const routes: Routes = [
  {
    path: '',
    component: LogcallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogcallPageRoutingModule {}
