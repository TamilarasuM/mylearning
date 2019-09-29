import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthenticationServiceService  } from "../_service/authentication-service.service";

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  errorMsg =false;
  constructor(private router:Router, private authService:AuthenticationServiceService) { }

  ngOnInit() {
  }

  login(args)
  {
   
    if(this.authService.login(args.username,args.password))//(args.username == "test" && args.password == "test")
   this.router.navigate(["/layout"]);
   else
    this.errorMsg = true; 
  }

}
