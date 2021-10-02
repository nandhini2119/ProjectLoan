import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  alert:boolean=false;
  UserName:string='';
  Password:string='';
  constructor(private _router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  OnLogin(loginForm:NgForm){
    console.log(loginForm.value);
    UserName:this.UserName.trim();
    Password:this.Password.trim();
    console.log(this.UserName);
    console.log(this.Password);
    let uname="Admin";
    let psw="asdf"
    if(this.UserName==uname && this.Password==psw){
      this._router.navigateByUrl('/AdminDashboard');
    }
    else{
      this.alert=true;
    }
  }
  closeAlert(){
    this.alert=false;
    this.UserName='';
    this.Password='';
  }

}


