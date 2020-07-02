import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'theogthr';

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
