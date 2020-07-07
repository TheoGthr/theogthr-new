import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'tgr-home',
  template: `
    <div class="theme-base-0d">
      <div class="sidebar">
        <div class="sidebar-sticky">
          <div class="sidebar-about">
            <h1>Théo Gauthier</h1>
            <p class="lead">
              {{ 'home.navbar.description' | translate }}
            </p>
          </div>

          <nav class="sidebar-nav">
            <a class="sidebar-nav-item" routerLink="/">{{
              'home.navbar.home-link' | translate
            }}</a>
            <a class="sidebar-nav-item" routerLink="/resume">{{
              'home.navbar.resume-link' | translate
            }}</a>

            <div class="sub-menu-icons">
              <div class="external-links">
                <a class="sidebar-nav-icons" href="https://github.com/TheoGthr">
                  <fa-icon [icon]="faGithub"></fa-icon>
                </a>
                <a
                  class="sidebar-nav-icons"
                  href="https://twitter.com/TheoGFasee"
                >
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
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
      <div class="content container">
        <mat-card class="example-card">
          <mat-card-header>
            <mat-card-title>History of cryptography</mat-card-title>
            <mat-card-subtitle>From Ceasar to maths</mat-card-subtitle>
          </mat-card-header>
          <!--img
            mat-card-image
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
            alt="Photo of a Shiba Inu"
          /-->
          <mat-card-content>
            <p>
              A little blog about cryptography: simple mechanisms, history and
              book recomendations.
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button routerLink="/crypto" color="primary">
              Go!
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor(private translateService: TranslateService) {}

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
