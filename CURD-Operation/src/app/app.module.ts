import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dashbaord/home.component';
import { RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './add-Transaction-Details/product.component';
import { FormsModule} from "@angular/forms";
import { UpdateProdcutComponent } from './update-prodcut/update-prodcut.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { OuterlayoutComponent } from './outerlayout/outerlayout.component';
import { CanActivate } from '@angular/router';
import { OnlyLoggedInUsersGuardGuard} from "./_guard/only-logged-in-users-guard.guard";
import { DataFilterPipe } from './filter-pipe/data-filter.pipe';
import { AddDetailsComponent } from './add-member-details/add-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';


import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
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
    RouterModule.forRoot([
      // {path:"", redirectTo:"login", pathMatch:"full"},
      {path:"", component:LoginCompComponent},
      {path:"layout", component:OuterlayoutComponent, canActivate: [OnlyLoggedInUsersGuardGuard]     
       ,children:[
      {path:"home", component:HomeComponent},
      {path:"product", component:ProductComponent},
      {path:"addMember", component:AddDetailsComponent},
      {path:"updateProduct/:id", component:UpdateProdcutComponent},
      {path:"**", component:LoginCompComponent}
    ]}]),
    BrowserAnimationsModule
  ],
  providers: [OnlyLoggedInUsersGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
