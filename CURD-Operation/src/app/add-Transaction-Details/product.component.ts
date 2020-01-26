import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { observable, Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { debug } from 'util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  updatedSuccessfully = false;
  searchNameFound =false;
  product:object ={};
  name:string;
  SearchName:string="";
  constructor(private http:HttpClient, private router:Router) { }
  currentDate ="";
  ngOnInit() {

  }
  addProduct(data){
    this.product = data;//{  "name" : data.name,"color" :data.color}
    if(this.SearchName)
      this.product["name"] = this.SearchName

    this.http.post("https://ng-complate-guide-3c2a6.firebaseio.com/products.json", this.product).pipe(
      map(data => {   
       var  list=[]
        for(var i=0; i<Object.keys(data).length; i++)
       {
          list.push(data[Object.keys(data)[i]])
       }
       return list;
      })
    ).subscribe( () =>{
          this.updatedSuccessfully =true;
          this.router.navigate(["/layout/home"]);
    })
  }

  search(data){
    debugger
    this.searchNameFound= false;
    var searchName =data.value;
    this.http.get("https://ng-complate-guide-3c2a6.firebaseio.com/test.json").pipe(
     debounceTime(500),
      map(data => {
       var  list=[];
      //list:Object[] =new Array();
      for(var i=0; i<Object.keys(data).length; i++)
          list.push(data[Object.keys(data)[i]])
       return list;
      })
    ).subscribe((res) =>{
      if(searchName){
        this.SearchName =res.find(r => r.mobileno == searchName).name;
        this.searchNameFound= true;
      }
      // this.dataSet = res;
      //  this.updateTotal();
    })
  }

  }

