import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'crypto',
  template: `
    <div class="theme-base-0f">
      <div class="sidebar">
        <div class="sidebar-sticky">
          <div class="sidebar-about">
            <h1>Crypto</h1>
          </div>
          <!--TreeCrypto v-bind:data="articles" :locale="$i18n.locale" -->
          <mat-selection-list #article [multiple]="false">
            <mat-list-option *ngFor="let article of articles" [value]="article">
              {{ article }}
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
    </div>
  `,
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent {
  public articles: any;

  constructor(private translateService: TranslateService) {
    this.articles = [
      'I. Introduction',
      'II. A brief history',
      'III. Mathematical concerns',
    ];
  }

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
