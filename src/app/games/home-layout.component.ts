import { Component } from "@angular/core";
import { MainItemModel } from "./mainitem.model";
import { mock_maincard_list } from "./mock-maincard-list";
import { mock_smallcard_list } from "./mock-smallcard-list";
import { SmallItemModel } from "./smallitem.model";

@Component({
    selector: 'riot-home-layout',
    templateUrl: 'home-layout.component.html'
})

export class HomeLayoutComponent {
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