import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: [] | any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getExperiences().subscribe({
      next: (n) => this.courses = n.courses,
      complete: () => console.info('complete courses')
    });
  }

}
