import { Component, Input} from "@angular/core";

@Component({
    selector: 'riot-games-main-card',
    templateUrl: 'MainGame.card.component.html',
    styleUrls: ['MainGame.card.component.css']
})

export class MainGameCardComponent {

    @Input() image: string;
    @Input() logo: string;
    @Input() description: string;

    constructor(){
        this.image="PLACEHOLDER IMAGE"
        this.logo="PLACEHOLDER LOGO" //This is overwriting the desired logo
        this.description="PLACEHOLDER DESCRIPTION" //This is overwriting the desired description
    }
}