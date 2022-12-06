import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}
 
  course:any={}
  readValue(){
    this.course={
      "title":this.courseTitle,
      "description":this.courseDescription,
      "venue":this.courseVenue,
      "duration":this.courseDuration,
      "date":this.courseDate

     
    }

    console.log(this.course)
    this.api.addCourse(this.course).subscribe(
      (response)=>{
        console.log(response)
        
    }
    )
  }
}


