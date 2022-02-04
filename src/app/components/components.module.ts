import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
      IntroComponent,
      AboutComponent,
      ExperienceComponent,
      SkillsComponent,
      ContactComponent,
      PortfolioComponent
  ],
  imports: [CommonModule],
  exports: [
  ]
})
export class ComponentsModule { }
