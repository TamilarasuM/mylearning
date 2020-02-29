import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dashbaord/home.component';
import { RouterModule} from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TransactionComponent } from './add-Transaction-Details/transaction.component';
import { FormsModule} from "@angular/forms";
import { UpdateProdcutComponent } from './update-prodcut/update-prodcut.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { OuterlayoutComponent } from './outerlayout/outerlayout.component';
import { OnlyLoggedInUsersGuardGuard} from "./_guard/only-logged-in-users-guard.guard";
import { DataFilterPipe } from './filter-pipe/data-filter.pipe';
import { AddDetailsComponent } from './add-member-details/add-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { MaterialModule } from "./material_module/material-module";
import {  TokenInterceptorService } from './intercep/InterceptorService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionComponent,
    UpdateProdcutComponent,
    LoginCompComponent,
    OuterlayoutComponent,
    DataFilterPipe,
    AddDetailsComponent,
  ],
  imports: [
   BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      // {path:"", redirectTo:"login", pathMatch:"full"},
      {path:"", component:LoginCompComponent},
      {path:"layout", component:OuterlayoutComponent, canActivate: [OnlyLoggedInUsersGuardGuard]     
       ,children:[
                  {path:"home", component:HomeComponent},
                  {path:"product", component:TransactionComponent},
                  {path:"addMember", component:AddDetailsComponent},
                  {path:"updateProduct/:id", component:UpdateProdcutComponent},
                  {path:"**", component:LoginCompComponent}
      ]}
  ]),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule // Only required for storage features
  
  ],
  providers: [
    // OnlyLoggedInUsersGuardGuard
    // ,
    AngularFireDatabase, 
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
