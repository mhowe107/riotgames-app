import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainItemModel } from "./mainitem.model";

@Injectable({
    providedIn: 'root'
})

export class GameService {
    private baseUrl:string = 'https://riotgames-app-default-rtdb.firebaseio.com/';
    private gamesEndPoint:string = 'games.json';

    constructor(private http:HttpClient) {
        
    }

public getGames() {
    return this.http.get<MainItemModel []>(this.baseUrl + this.gamesEndPoint);
}

public getGame(index:number) {
    return this.http.get<MainItemModel []>(this.baseUrl + 'games/' + index +'.json');
}

}