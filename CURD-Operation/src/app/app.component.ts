import { Component } from '@angular/core';
import { dataService } from './_service/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loader:dataService){}
  title = 'Expense Sheet';
  showMenu = false;
  isLoading = false;
  ngOnInt(){
    //  this.loader.isLoading;
  }

}
