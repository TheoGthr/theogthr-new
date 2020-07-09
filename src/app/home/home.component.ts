import { Component } from '@angular/core';

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
            <nav-lang></nav-lang>
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
      <div class="content container">
        <mat-card>
          <mat-card-header>
            <mat-card-title>History of cryptography</mat-card-title>
            <mat-card-subtitle>From Ceasar to maths</mat-card-subtitle>
          </mat-card-header>
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
export class HomeComponent {}
