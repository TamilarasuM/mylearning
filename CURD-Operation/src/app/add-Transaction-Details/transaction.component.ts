import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { observable, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { debug } from 'util';

@Component({
  selector: 'app-product',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
 
  // color: ThemePalette = 'primary';
  mode: string = 'indeterminate';
  value = 50;
  bufferValue = 75;

  updatedSuccessfully = false;
  searchNameFound =false;
  product:object ={};
  name:string;
  SearchName:string="";
  searching:boolean = false;

  constructor(private http:HttpClient, private router:Router) { }
  currentDate ="";
  ngOnInit() {  }

  addProduct(data){
    this.product = data;
    if(this.SearchName)
      this.product["name"] = this.SearchName
      this.http.post("https://ng-complate-guide-3c2a6.firebaseio.com/products.json", this.product).pipe(
      map(data => {   
       var  list=[]
        for(var i=0; i<Object.keys(data).length; i++)
          list.push(data[Object.keys(data)[i]])
       return list;
      })
    ).subscribe( () =>{
          this.updatedSuccessfully =true;
          this.router.navigate(["/layout/home"]);
    })
  }

  search(data){
    this.searching = true;
    this.searchNameFound= false;
    var searchName =data.value;
    this.http.get("https://ng-complate-guide-3c2a6.firebaseio.com/test.json").pipe(
     debounceTime(500),
     distinctUntilChanged(),
      map(data => {
       var  list=[];
      for(var i=0; i<Object.keys(data).length; i++)
          list.push(data[Object.keys(data)[i]])
       return list;
      })
    ).subscribe((res) =>{
      this.searching = false;
      if(searchName){
        this.SearchName =res.find(r => r.mobileno == searchName).name;
        this.searchNameFound= true;
      }
      // this.dataSet = res;
      //  this.updateTotal();
    })
  }

  }

