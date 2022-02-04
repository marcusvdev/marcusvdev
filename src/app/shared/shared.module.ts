import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GithubService } from "./services/github.service";
import { RouterModule } from "@angular/router";
import { ExperienceService } from "./services/experience.service";
import { CourseService } from "./services/course.service";

@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
      HeaderComponent,
      FooterComponent
  ],
  providers: [
    GithubService,
    ExperienceService,
    CourseService
  ]
})
export class SharedModule { }
