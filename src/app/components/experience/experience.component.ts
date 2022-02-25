import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences: [] | any;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe({
      next: (n) =>
        (this.experiences = n.experiences.sort(
          (a: any, b: any) => b.id - a.id
        )),
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });
  }
}
