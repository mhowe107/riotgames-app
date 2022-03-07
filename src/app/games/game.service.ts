import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainItemModel } from "./mainitem.model";

@Injectable({
    providedIn: 'root'
})

export class GameService {
    private baseUrl:string = '';
    private gamesEndPoint:string = 'products.json';

    constructor() {
        
    }

public getGames() {
    return this.http.get<MainItemModel []>(this.baseUrl + this.gamesEndPoint);
}

}