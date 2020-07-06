import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeSidebarComponent } from './resume-sidebar/resume-sidebar.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [ResumeComponent, ResumeSidebarComponent],
  imports: [CommonModule, ResumeRoutingModule, CoreModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
