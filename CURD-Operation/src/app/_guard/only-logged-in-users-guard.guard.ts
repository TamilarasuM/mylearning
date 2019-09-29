import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardGuard implements CanActivate  {
  canActivate() {
// debugger
    console.log("OnlyLoggedInUsers");
    if (sessionStorage.currentUser !=undefined) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}
