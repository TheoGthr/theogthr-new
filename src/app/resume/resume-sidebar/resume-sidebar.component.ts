import { Component } from '@angular/core';

@Component({
  selector: 'resume-sidebar',
  styleUrls: ['resume-sidebar.component.scss'],
  template: `
    <div class="sidebar">
      <img mat-card-avatar src="/assets/img/resume/profile.jpg" alt="profile" />
      <div class="lead mat-subheading-1">Lyon · France</div>
      <div class="lead mat-subheading-1">theogauthier13@gmail.com</div>
      <div class="sidebar-sticky">
        <div>
          <div class="sidebar-about">
            <h1>{{ 'home.navbar.resume-link' | translate }}</h1>
          </div>
          <nav class="sidebar-nav">
            <a routerLink="/" class="sidebar-nav-item">{{
              'home.navbar.home-link' | translate
            }}</a>
            <nav-lang></nav-lang>
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ResumeSidebarComponent {}
