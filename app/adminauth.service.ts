import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
//pending work
  authUser(user:any){
    let UserArray:any=[];
    if(localStorage.getItem('Users')){
      UserArray=localStorage.getItem('Users');
    }

  //  return UserArray.find(p: => p.use)
  }
}
