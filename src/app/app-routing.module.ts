import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {

    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)

  },  {
    path: 'createuser',
    loadChildren: () => import('./createuser/createuser.module').then( m => m.CreateuserPageModule)
  },


  {
<<<<<<< HEAD
  
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
=======
    path: 'uploadasset',
    loadChildren: () => import('./uploadasset/uploadasset.module').then( m => m.UploadassetPageModule)
  },
  {
    path: 'unallocateuser',
    loadChildren: () => import('./unallocateuser/unallocateuser.module').then( m => m.UnallocateuserPageModule)
>>>>>>> 24b2314c8eafea05592f75d00692ead87a1eb26b
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'logcall',
    loadChildren: () => import('./logcall/logcall.module').then( m => m.LogcallPageModule)
  },
  {
    path: 'allocateincident',
    loadChildren: () => import('./allocateincident/allocateincident.module').then( m => m.AllocateincidentPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
