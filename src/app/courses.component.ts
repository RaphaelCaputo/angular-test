import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    // <div class="courses"> ".courses"
    // <div id="courses"> "#courses"
    // <courses> "courses"
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> 
    ` 
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    email = "me@example.com";

    onKeyUp(){
        console.log(this.email);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}