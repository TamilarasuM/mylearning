import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

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

    this.http.post("http://localhost:5656/products", this.product).subscribe( (res:Response) =>{
          console.log(res)
          this.updatedSuccessfully =true;
          this.router.navigate(["/layout/home"]);
    })
  }

  search(data){
    var searchName =data.value;
    this.http.get("http://localhost:5656/test").toPromise().then((res) =>{
     this.searchNameFound= true;
     debugger
    //  if(searchName)
    // this.SearchName =res.find(r => r.mobileno == searchName).name
    //   this.dataSet = res;
    //  this.updateTotal();
    })
  }

  }

