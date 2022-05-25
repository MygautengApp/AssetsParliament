import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 pages = [
    {
      title: 'Login',
      url: '/tabs/tab1',
      icon: 'log-in'
    },
    {
      title: 'Contact',
      url: '/tabs/tab2',
      icon: 'person'
    },
    {
      title: 'About',
      url: '/tabs/tab3',
      icon: 'information-circle'
    }
  ];
  
  adminpages =[
    {
      title: 'Dashboard',
      url: '',
      icon:'pie-chart'
    },
    {
     title: 'Create User',
      url: 'admin/tab1',
      icon: 'person-add'
    },
    {
     title:'Upload Asset',
     url:'admin/tab2', 
    icon: 'push'
    },
    {
      title:'Unallocate User',
      url:'admin/tab3', 
     icon: 'person-remove'
     },
     {
      title:'Sign out',
      url:'', 
     icon: 'exit'
  
     }
  
  
  ];
  
  
  constructor() { }
}
