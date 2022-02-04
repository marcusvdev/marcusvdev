import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  age!: number;

  courses: [] | any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.age = this.myAge('03/09/1993');

    this.courseService.getExperiences().subscribe({
      next: (n) => this.courses = n.courses,
      complete: () => console.info('complete')
    });
  }

  public myAge(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth); // mm-dd-yyyy
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
