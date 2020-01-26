import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-outerlayout',
  templateUrl: './outerlayout.component.html',
  styleUrls: ['./outerlayout.component.css']
})
export class OuterlayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleSideNav(ele:ElementRef){
    debugger
    if(navigator.userAgent.indexOf("Mobile")>-1){
      if(document.getElementsByClassName("sidenav")[0].className == "sidenav")
        document.getElementsByClassName("sidenav")[0].className = "sidenav sideMenu";
      else
       document.getElementsByClassName("sidenav")[0].className = "sidenav";
    }
    else{

    }
  }
}
