import { Component } from '@angular/core';

@Component({
  selector: 'resume-sidebar',
  template: `
    <div class="sidebar">
      <div class="sidebar-sticky">
        <div class="sidebar-about">
          <h1>Resume</h1>
        </div>
        <!--TreeResume v-bind:data="articles" :locale="$i18n.locale" -->
        <mat-selection-list #article [multiple]="false">
          <mat-list-option routerLink="/resume">
            Overview
          </mat-list-option>
          <mat-list-option routerLink="/resume/experiences">
            Experiences
          </mat-list-option>
        </mat-selection-list>
        <nav class="sidebar-nav">
          <a routerLink="/" class="sidebar-nav-item">Home</a>
        </nav>
        <p>
          <small>{{ 'home.navbar.legal' | translate }}</small>
        </p>
      </div>
    </div>
  `,
})
export class ResumeSidebarComponent {}
