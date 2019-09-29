import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  constructor() { }

  login(userName:string, password:any){
    if(userName=="test"&& password =="test"){
      sessionStorage.setItem('currentUser', JSON.stringify(userName));
  return true;  
  }
    else
    return false;
  }
}
