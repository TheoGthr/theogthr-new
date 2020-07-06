import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'resume',
  template: `
    <div class="theme-base-09">
      <resume-sidebar></resume-sidebar>
      <div class="content container">
        <!--div class="example-action-buttons">
          <button mat-button (click)="accordion.openAll()">Expand All</button>
          <button mat-button (click)="accordion.closeAll()">
            Collapse All
          </button>
        </div-->
        <mat-accordion class="example-headers-align" multi>
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                My experiences
              </mat-panel-title>
            </mat-expansion-panel-header>
            <mat-list role="list">
              <mat-list-item role="listitem" class="experience-item">
                <div class="enterprise-date">
                  <div class="enterprise">Sopra Steria</div>
                  <div class="date">02/2019 - now</div>
                </div>
                <div class="jobs">
                  Liste
                </div>
              </mat-list-item>
              <mat-divider></mat-divider>
              <mat-list-item role="listitem">Item 2</mat-list-item>
              <mat-divider></mat-divider>
              <mat-list-item role="listitem">Item 3</mat-list-item>
            </mat-list>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </div>
  `,
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  public articles: any;

  constructor(private translateService: TranslateService) {}

  public setLang(lang: string) {
    this.translateService.use(lang);
  }
}
