import { Component, Input } from "@angular/core";

@Component({
    selector: 'riot-games-job-position',
    templateUrl: 'job-position.component.html',
})

export class JobPositionComponent{

    @Input() title: string;
    @Input() craft: string;
    @Input() team: string;
    @Input() office: string;

    constructor(){
        this.title="PLACEHOLDER TITLE"
        this.craft="PLACEHOLDER CRAFT"
        this.team="PLACEHOLDER TEAM"
        this.office="PLACEHOLDER OFFICE"
    }
}