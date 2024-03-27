import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private _loginService:LoginService, private _router:Router) { }

  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        // storing token
        localStorage.setItem("my-app-token", data.token);
        // go to dashboard
        this._router.navigateByUrl("/dashboard");
        alert("login success");
      },
      (err:any)=>{
        alert("Invalid credentials");
      }
    )
  }


}
