import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs"
import { map } from 'rxjs/operators';
import { dataService } from "../_service/dataService"

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  Total: number;
  term:string;
  dataSet: any = [];
  debitData: any = [];
  id: number;
  // searchTearm:string;
  debitTotal: number;
  enableCntry: boolean = false;
  constructor(private http: HttpClient, private db: AngularFireDatabase, private dataService: dataService) {
  }

  ngOnInit() {
    this.dataService.getMembersList().subscribe((res) => {
      this.dataSet = res;
      this.Total = this.updateTotal(this.dataSet);
    });
    this.fetchData();
  }

 
  fetchData() {
    this.db.list("products").snapshotChanges()
      .pipe(
        map(data => {
          var list = [];
          data.forEach(item => {
            let a = item.payload.toJSON();
            a['$key'] = item.key;
            list.push(a);
          })
          return list;
        })
      ).subscribe((res) => {
        this.debitData = res;
        this.debitTotal = this.updateTotal(this.debitData);
      })
  }

  DeleteProduct(articleId) {
    this.dataService.DeleteTransaction(articleId)
  }

  DeleteCreadit(articleId) {
    this.dataService.DeleteMember(articleId);
  }



  updateTotal(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += parseFloat(data[i].amt)
    }
    return total;
  }

  drpSelected(args) {
  }

  enableChkBx(args) {
    this.enableCntry = args.checked;
  }

  trackByfn(index, item) {
    return item;
  }
}
