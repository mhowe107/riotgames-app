import { Component, OnInit } from "@angular/core";
import { MainItemModel } from "./mainitem.model";
import { SmallItemModel } from "./smallitem.model";
import { mock_maincard_list } from "./mock-maincard-list";
import { mock_smallcard_list } from "./mock-smallcard-list";
import { GameService } from "./game.service";

@Component({
  selector: 'riot-home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit {
  mainitems: MainItemModel[] = [];
  smallitems: SmallItemModel[] = [];

  constructor(private service: GameService) {

    for (var mainitem of mock_maincard_list) {
      this.mainitems.push(mainitem);
    }

    for (var smallitem of mock_smallcard_list) {
      this.smallitems.push(smallitem);
    }
  }

  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getGames().subscribe(data => {
      console.log(data);
    });
  }

}