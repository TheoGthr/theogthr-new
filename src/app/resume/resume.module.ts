import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeSidebarComponent } from './resume-sidebar/resume-sidebar.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeExperiencesComponent } from './cards/resume-experiences.component';
import { ResumeEducationComponent } from './cards/resume-education.component';
import { ResumeInterestsComponent } from './cards/resume-interests.component';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeSidebarComponent,
    ResumeExperiencesComponent,
    ResumeEducationComponent,
    ResumeInterestsComponent,
  ],
  imports: [CommonModule, ResumeRoutingModule, CoreModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
