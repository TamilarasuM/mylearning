import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  Total:number;
  dataSet:any =[];
  debitData:any=[];
  id :number;
  debitTotal:number;
  enableCntry:boolean =false;
  private headers = new Headers({"content-Type":"application/json"})
  constructor(private http:HttpClient) {   }

  ngOnInit() {
  this.fetchData();
  this.fetchMembers();
  }

 
  fetchMembers(){
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
      this.dataSet = res;
      debugger
      this.Total =  this.updateTotal(this.dataSet);
  });
  }
fetchData (){
   this.http.get("https://ng-complate-guide-3c2a6.firebaseio.com/products.json").pipe(
    map(data => {   
     var  list=[]
      for(var i=0; i<Object.keys(data).length; i++)
     {
        list.push(data[Object.keys(data)[i]])
     }
     return list;
    })
  ).pipe(map( function(res,index){
   return res;
    }) ).subscribe((res) =>{
    this.debitData = res;
    this.debitTotal = this.updateTotal(this.debitData);
  })
}


  DeleteProduct(articleId) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = '${"https://ng-complate-guide-3c2a6.firebaseio.com/products"}/${articleId}';
    const url1 = 'https://ng-complate-guide-3c2a6.firebaseio.com/products/'+articleId;
    this.http.delete(url1, {headers: headers}).toPromise().then( () => {
      this.fetchData();
    })
  }

  DeleteCreadit(articleId) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = '${"https://ng-complate-guide-3c2a6.firebaseio.com/test"}/${articleId}';
    const url1 = 'https://ng-complate-guide-3c2a6.firebaseio.com/test/'+articleId;
    this.http.delete(url1, {headers: headers}).toPromise().then( () => {
      this.fetchData();
    })
  }

  updateTotal(data){
    debugger
    var total =0;
    for(var i=0; i< data.length;i++){
      total += parseFloat(data[i].amt)
    }
    return total;
  }

  drpSelected(args){
    debugger
  }

  enableChkBx(args){
        this.enableCntry = args.checked;
  }

  trackByfn(index, item){
    return item;
  }
}
