import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
    {
    path: 'logcall',
    loadChildren: () => import('./logcall/logcall.module').then( m => m.LogcallPageModule)
  },
  {
    path: 'allocateincident',
    loadChildren: () => import('./allocateincident/allocateincident.module').then( m => m.AllocateincidentPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/logcall',
    pathMatch: 'full'
  }
]
  },
  {
    path: '',
    redirectTo: '/tabs/logcall',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
