import { Component } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

   course:any=[
    {"id":1,
    "courseTitle":"java",
    "courseDescription":"programming",
    "courseVenue":"kochi",
    "courseDuration":"6_month",
    "courseDate":"4-5-2023"},
    {"id":2,"courseTitle":"Php","courseDescription":"pprogramming","courseVenue":"online","courseDuration":"8_month","courseDate":"4-5-2023"
  }]

}
