import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(private _router:Router) { }

  logout(){
    // removing token
    localStorage.removeItem("my-app-token");
    // go to login
    this._router.navigateByUrl("/login");
  }

}
