import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { MainItemModel } from "./mainitem.model";

@Injectable({
    providedIn: 'root'
})

export class GameService {

    constructor(private db:AngularFireDatabase) {
        
    }

public getGames() {
    return this.db.list<MainItemModel>("games").valueChanges();
}

public addGame(game:MainItemModel) {
    this.db.list<MainItemModel>("games").push(game);
}

// public getGame(index:number) {
//     return this.db.list("games", ref => ref.orderByChild("price").startAt(10)).valueChanges(); //price is not applicable to my code
// }

}