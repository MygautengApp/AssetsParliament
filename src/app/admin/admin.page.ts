import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  currentPageTitle='Dashboard';
  appPages =[
    {
      title: 'Dashboard',
      url: '',
      icon:'pie-chart'
    },
    {
     title: 'Create User',
      url: '/createuser',
      icon: 'person-add'
    },
    {
     title:'Upload Asset',
     url:'/uploadasset', 
    icon: 'push'
    },
    {
      title:'Unallocate User',
      url:'/unallocateuser', 
     icon: 'person-remove'
     },
     {
      title:'Sign out',
      url:'/signout', 
     icon: 'exit'
  
     }
  
  
  ];
  



  constructor() { }

  ngOnInit() {
  }

}
