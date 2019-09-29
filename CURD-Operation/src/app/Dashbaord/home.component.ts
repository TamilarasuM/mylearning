import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    this.http.get("http://localhost:5656/test").toPromise().then((res) =>{
      this.dataSet = res;
      this.Total =  this.updateTotal(this.dataSet);
  });
  }
fetchData (){
  debugger
   this.http.get("https://tamilarasum.github.io/test/sampleApp/products.json").toPromise().then((res) =>{
    this.debitData = res;
    this.debitTotal = this.updateTotal(this.debitData);
  })
}


  DeleteProduct(articleId) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = '${"http://localhost:5656/products"}/${articleId}';
    const url1 = 'http://localhost:5656/products/'+articleId;
    this.http.delete(url1, {headers: headers}).toPromise().then( () => {
      this.fetchData();
    })
  }

  DeleteCreadit(articleId) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = '${"http://localhost:5656/test"}/${articleId}';
    const url1 = 'http://localhost:5656/test/'+articleId;
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
