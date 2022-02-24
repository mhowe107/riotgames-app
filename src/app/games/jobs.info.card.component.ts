import { Component, Input } from "@angular/core";

@Component({
    selector: 'riot-games-info-card',
    templateUrl: 'jobs.info.card.component.html',
    styleUrls: ['jobs.card.component.css']
})

export class JobsInfoCardComponent{

    @Input() image: string;
    @Input() text: string;

    constructor(){
        this.image="PLACEHOLDER IMAGE"
        this.text="PLACEHOLDER LOGO"
    }
}