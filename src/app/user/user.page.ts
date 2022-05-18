import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }



  logcall(){
    // code for login of user goes to tabs page
    this.router.navigate(['/logcall']);
  
  }

}



