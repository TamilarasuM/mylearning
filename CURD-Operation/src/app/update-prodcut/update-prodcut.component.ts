import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-update-prodcut',
  templateUrl: './update-prodcut.component.html',
  styleUrls: ['./update-prodcut.component.css']
})
export class UpdateProdcutComponent implements OnInit {
 data ={};
 id:number;
  constructor(private router:Router,private routes:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    //  this.routes.params.subscribe( parms => { 
    //  console.log(parms);
    //  this.id = +parms["id"];
    // })
    this.data ={"name": "Sumathi", "color":"black"}
  }


  updateProduct(args){
    this.data = args;
    this.routes.params.subscribe( parms=> {this.id = parms["id"]});
    const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json','Authorization': 'my-auth-token'})};
    this.http.put("/products/"+this.id,JSON.stringify(this.data), httpOptions).subscribe((res:Response) =>{
    this.router.navigate(["/"]);
    })
  }

}
