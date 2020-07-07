import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'resume-education',
  styleUrls: ['resume-cards.component.scss'],
  template: `
    <mat-card class>
      <mat-card-header>
        <div mat-card-avatar>
          <fa-icon [icon]="faGraduationCap"></fa-icon>
        </div>
        <mat-card-title>{{
          'resume.education.title' | translate
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <!-- CVUT -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.education.cvut.title' | translate"
              class="enterprise"
            ></div>
            <div
              [innerHTML]="'resume.education.cvut.duration' | translate"
              class="date"
            ></div>
          </div>
          <div class="jobs">
            <p
              [innerHTML]="'resume.education.cvut.description' | translate"
            ></p>
          </div>
          <mat-divider></mat-divider>
        </div>
        <!-- TSE -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.education.tse.title' | translate"
              class="enterprise"
            ></div>
            <div
              [innerHTML]="'resume.education.tse.duration' | translate"
              class="date"
            ></div>
          </div>
          <div class="jobs">
            <p [innerHTML]="'resume.education.tse.description' | translate"></p>
          </div>
          <mat-divider></mat-divider>
        </div>
        <!-- CPGE -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.education.prepa.title' | translate"
              class="enterprise"
            ></div>
            <div
              [innerHTML]="'resume.education.prepa.duration' | translate"
              class="date"
            ></div>
          </div>
          <div class="jobs">
            <p
              [innerHTML]="'resume.education.prepa.description' | translate"
            ></p>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ResumeEducationComponent {
  faGraduationCap = faGraduationCap;
}
