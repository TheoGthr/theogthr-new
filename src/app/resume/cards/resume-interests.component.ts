import { Component } from '@angular/core';
import {
  faHeart,
  faMusic,
  faHeadphones,
  faHeartbeat,
  faUtensilSpoon,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'resume-interests',
  styleUrls: ['resume-cards.component.scss'],
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar>
          <fa-icon [icon]="faHeart"></fa-icon>
        </div>
        <mat-card-title>{{
          'resume.interests.title' | translate
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content class="all-interests mat-typography">
        <div class="two-interests">
          <div class="interest">
            <fa-icon [icon]="faHeadphones" size="2x"></fa-icon>
            <p>Music (Jazz, DnB)</p>
          </div>
          <div class="interest">
            <fa-icon [icon]="faMusic" size="2x"></fa-icon>
            <p>Drums, piano</p>
          </div>
        </div>
        <div class="two-interests">
          <div class="interest">
            <fa-icon [icon]="faUtensilSpoon" size="2x"></fa-icon>
            <p>Cooking</p>
          </div>
          <div class="interest">
            <fa-icon [icon]="faHeartbeat" size="2x"></fa-icon>
            <p>Running</p>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ResumeInterestsComponent {
  faHeart = faHeart;
  faMusic = faMusic;
  faHeadphones = faHeadphones;
  faUtensilSpoon = faUtensilSpoon;
  faHeartbeat = faHeartbeat;
}
