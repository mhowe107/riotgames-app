import { Component, Input } from "@angular/core";

@Component({
    selector: 'riot-games-university-card',
    templateUrl: 'jobs.university.card.component.html',
    styleUrls: ['jobs.card.component.css']
})

export class UniversityCardComponent{

    @Input() image: string;
    @Input() text: string;

    constructor(){
        this.image="PLACEHOLDER IMAGE"
        this.text="PLACEHOLDER LOGO"
    }
}