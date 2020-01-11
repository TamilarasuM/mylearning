import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { map } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  updatedSuccessfully = false;
  searchNameFound =false;
  product:object ={};
  SearchName:string="";
  constructor(private http:HttpClient, private router:Router) { }
  currentDate ="";
  ngOnInit() {

  }
  addProduct(data){
    debugger
    this.product = data;//{  "name" : data.name,"color" :data.color}

    this.http.post("https://ng-complate-guide-3c2a6.firebaseio.com/products.json", this.product).pipe(
      map(data => {   
       var  list=[]
        for(var i=0; i<Object.keys(data).length; i++)
       {
          list.push(data[Object.keys(data)[i]])
       }
       return list;
      })
    ).subscribe( (res:Response) =>{
          console.log(res)
          this.updatedSuccessfully =true;
          this.router.navigate(["/layout/home"]);
    })
  }

  search(data){
    var searchName =data.value;
    this.http.get("https://ng-complate-guide-3c2a6.firebaseio.com/test.json").pipe(
      map(data => {   
       var  list=[]
        for(var i=0; i<Object.keys(data).length; i++)
       {
          list.push(data[Object.keys(data)[i]])
       }
       return list;
      })
    ).toPromise().then((res) =>{
     this.searchNameFound= true;
    //  if(searchName)
    // this.SearchName =res.find(r => r.mobileno == searchName).name
    //   this.dataSet = res;
    //  this.updateTotal();
    })
  }

  }

