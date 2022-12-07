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
 
  
  readValue=()=>{
    let course:any={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseVenue":this.courseVenue,
      "courseDuration":this.courseDuration,
      "courseDate":this.courseDate

     
    }

    console.log(course)
    this.api.addCourse(course).subscribe(
      (response)=>{
        console.log(response)
        
        
    }
    )
  }
}


