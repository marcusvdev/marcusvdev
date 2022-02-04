import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  courses: [] | any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getExperiences().subscribe({
      next: (n) => this.courses = n.courses,
      error: (e) => e,
      complete: () => console.info('complete')
    });
  }

}
