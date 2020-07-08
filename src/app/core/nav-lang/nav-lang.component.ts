import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'nav-lang',
  template: `
    <div class="sub-menu-icons">
      <div class="external-links">
        <a class="sidebar-nav-icons" href="https://github.com/TheoGthr">
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>
        <a class="sidebar-nav-icons" href="https://twitter.com/TheoGFasee">
          <fa-icon [icon]="faTwitter"></fa-icon>
        </a>
      </div>
      <div>
        <button
          mat-icon-button
          [matMenuTriggerFor]="menu"
          [matTooltip]="'home.navbar.language-tooltip' | translate"
        >
          <mat-icon>language</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item (click)="setLang('fr')">
            Français
          </button>
          <button mat-menu-item (click)="setLang('en')">English</button>
        </mat-menu>
      </div>
    </div>
  `,
})
export class NavLangComponent {
  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor(private translateService: TranslateService) {}

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
