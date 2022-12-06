import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseVenue=""
  courseDuration=""
  courseDate=""

 
  readValue(){
    let course:any={
      "title":this.courseTitle,
      "description":this.courseDescription,
      "venue":this.courseVenue,
      "duration":this.courseDuration,
      "date":this.courseDate

     
    }

    console.log(course)
  }

}
