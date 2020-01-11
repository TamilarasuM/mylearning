import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  addDetails(args:any){
    // this.http.post("http://localhost:5656/test", args).subscribe( (res:Response) =>{
    //   console.log(res)
    //   //this.router.navigate(["/layout/home"]);
    // })
    this.http.post("https://ng-complate-guide-3c2a6.firebaseio.com/test.json",args).subscribe( (res:Response) =>{
        console.log(res)
        this.router.navigate(["/layout/home"]);
      })
  }
}
