import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from "rxjs/operators";
import { debug } from 'util';
import { Subject } from 'rxjs';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class dataService {

    isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }

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
    UpdateTransaction(id: string,formData:object) {
        return this.db.object('/products/' + id).update(formData).catch(error => {
            alert(error);
        })
    }
}