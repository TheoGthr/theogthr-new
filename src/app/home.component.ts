import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
            <a class="sidebar-nav-item" routerLink="resume">{{
              'home.navbar.resume-link' | translate
            }}</a>

            <p>
              <a class="sidebar-nav-icons" href="https://github.com/TheoGthr">
                <mat-icon class="svg-icon" svgIcon="github"></mat-icon>
              </a>
              <a
                class="sidebar-nav-icons"
                href="https://twitter.com/TheoGFasee"
              >
                <mat-icon class="svg-icon" svgIcon="twitter"></mat-icon>
              </a>
            </p>
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
      <div class="content container">
        <div>
          <button mat-button (click)="setLang('fr')">Français</button>
          <button mat-button (click)="setLang('en')">Anglais</button>
        </div>
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
})
export class HomeComponent {
  constructor(private translateService: TranslateService) {}

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
