import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from "rxjs/operators";
import { debug } from 'util';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class dataService {
    Total: number;
    dataSet: any = [];
    todos$: AngularFireList<any[]>;
    constructor(private db: AngularFireDatabase) { }

    getMembersList() {
        let data = this.db.list("test").snapshotChanges().pipe(
            map(data => {
                var list = [];
                data.forEach(item => {
                    let a = item.payload.toJSON();
                    a['$key'] = item.key;
                    list.push(a);
                })
                return list;
            })
        )
        return data;
    }
    DeleteMember(id: string) {
        return this.db.object('/test/' + id).remove().catch(error => {
            alert(error);
        })
    }
    DeleteTransaction(id: string) {
        return this.db.object('/products/' + id).remove().catch(error => {
            alert(error);
        })
    }
}