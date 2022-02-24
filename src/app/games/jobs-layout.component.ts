import { Component } from "@angular/core";
import { JobPositionModel } from "./job-position.model";
import { mock_job_list } from "./mock-job-position-list";

@Component({
    selector: 'riot-jobs-layout',
    templateUrl: 'jobs-layout.component.html'
})

export class JobsLayoutComponent {
    jobs: JobPositionModel[] = [];

    constructor() {

        for (var job of mock_job_list) {
            this.jobs.push(job);
        }

    }
}
