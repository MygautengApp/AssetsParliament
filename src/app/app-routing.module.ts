import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
   
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/tabs/tabs.module').then(m => m.TabsPageModule)
      },
      
      {
        path: 'signup',
        loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupPageModule)
      }
    ]
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
    loadChildren: () => import('./views/admin/admin.module').then( m => m.AdminPageModule)

  },
  {
    path: 'createuser',
    loadChildren: () => import('./views/createuser/createuser.module').then( m => m.CreateuserPageModule)
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
    path: 'uploadasset',
    loadChildren: () => import('./views/uploadasset/uploadasset.module').then( m => m.UploadassetPageModule)
  },
  {
    path: 'unallocateuser',
    loadChildren: () => import('./views/unallocateuser/unallocateuser.module').then( m => m.UnallocateuserPageModule)

  },
  {
    path: 'signout',
    loadChildren: () => import('./views/signout/signout.module').then( m => m.SignoutPageModule)
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
