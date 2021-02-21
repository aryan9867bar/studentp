import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  loginDetail:any;

  constructor(private router:Router, private loginService:LoginService) { 
    this.username = "";
    this.password = "";
    
    navigator.geolocation.getCurrentPosition(function(l) {
      console.log(l)
    })
  }
  ngOnInit(): void {
  }

  register() {
    this.router.navigate(["/form"]); 
  }

  login() {

    if(this.username !== "" || this.password !== "") {
        const user = {
          username:this.username,
          password:this.password
        }
        
        this.loginService.login(user).subscribe(login => {
          if(login.success) {
            this.router.navigate(["/dashboard"]);
          } else {
            alert("wrong username or password!")
          }
          
        })
        

    } else {
      alert("Input cant be blank!")
    }
   
  }
}
