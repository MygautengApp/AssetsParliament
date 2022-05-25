import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public selectedIndex = 0;
  appPages =[
    
     {
      title:'Sign out',
      url:'/signout', 
     icon: 'exit'
  
     },
     {
      title:'Home',
      url:'/tabs', 
     icon: 'Home'
  
     }
  
  
  ];



  constructor( private router:Router) { }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }



  logcall(){
    // code for login of user goes to tabs page
    //this.router.navigate(['/logcall']);
  
  }

}



