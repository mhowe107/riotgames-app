import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { MainItemModel } from '../mainitem.model';

@Component({
  selector: 'riotgames-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {

  constructor(private gs:GameService) { }

  ngOnInit(): void {
  }

  addGame(game:MainItemModel) {
    console.log("You pressed addGame");
    console.log(game);
    this.gs.addGame(game);
  }
}
