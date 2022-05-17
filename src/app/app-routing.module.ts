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
    path: 'uploadasset',
    loadChildren: () => import('./uploadasset/uploadasset.module').then( m => m.UploadassetPageModule)
  },
  {
    path: 'unallocateuser',
    loadChildren: () => import('./unallocateuser/unallocateuser.module').then( m => m.UnallocateuserPageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
