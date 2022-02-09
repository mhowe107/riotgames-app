import { Component } from '@angular/core';
import { MainItemModel } from './games/mainitem.model';
import { SmallItemModel } from './games/smallitem.model';
import { mock_maincard_list } from './games/mock-maincard-list';
import { mock_smallcard_list } from './games/mock-smallcard-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'riotgames-app';
  mainitems: MainItemModel [] = [];
  smallitems: SmallItemModel [] = [];

  constructor() {

    for(var mainitem of mock_maincard_list){
      this.mainitems.push(mainitem);
    }

    for(var smallitem of mock_smallcard_list){
      this.smallitems.push(smallitem);
    }

  }
}
