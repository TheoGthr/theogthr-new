import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
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
                <mat-icon svgIcon="github"></mat-icon>
              </a>
              <a
                class="sidebar-nav-icons"
                href="https://twitter.com/TheoGFasee"
              >
                <mat-icon svgIcon="twitter"></mat-icon>
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
          <button (click)="setLang('fr')">Français</button>
          <button (click)="setLang('en')">Anglais</button>
        </div>
        <a routerLink="crypto">To crypto !</a>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang(translateService.getBrowserLang());

    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/github.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/twitter.svg'
      )
    );
  }

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
