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
    <mat-card class>
      <mat-card-header>
        <div mat-card-avatar>
          <fa-icon [icon]="faHeart"></fa-icon>
        </div>
        <mat-card-title>{{
          'resume.interests.title' | translate
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content class="all-interests">
        <div class="two-interests">
          <mat-card class="interest">
            <fa-icon [icon]="faHeadphones"></fa-icon>
            <p>Music (Jazz, DnB)</p>
          </mat-card>
          <mat-card class="interest">
            <fa-icon [icon]="faMusic"></fa-icon>
            <p>Drums, piano</p>
          </mat-card>
        </div>
        <div class="two-interests">
          <mat-card class="interest">
            <fa-icon [icon]="faUtensilSpoon"></fa-icon>
            <p>Cooking</p>
          </mat-card>
          <mat-card class="interest">
            <fa-icon [icon]="faHeartbeat"></fa-icon>
            <p>Running</p>
          </mat-card>
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
