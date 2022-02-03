import { Component } from "@angular/core";

@Component({
    selector: 'riot-games-main-card',
    templateUrl: 'MainGame.card.component.html',
    styleUrls: ['MainGame.card.component.css']
})

export class MainGameCardComponent {
    // @Input() image: string;
    logo: string;
    description: string;

    constructor(){
        // this.image="PLACEHOLDER IMAGE"
        this.logo="PLACEHOLDER LOGO"
        this.description="Missing Description"
    }
}