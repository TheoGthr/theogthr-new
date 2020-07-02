import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ 'title' | translate }}</h1>
    <p>{{ 'sub' | translate }}</p>
    <div>
      <button (click)="setLang('fr')">Français</button>
      <button (click)="setLang('en')">Anglais</button>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang(translateService.getBrowserLang());
  }

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
