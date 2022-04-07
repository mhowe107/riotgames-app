import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NewsLayoutComponent } from './games/news-layout.component';
import { HomeLayoutComponent } from './games/home-layout.component';
import { LegalLayoutComponent } from './games/legal-layout.component';
import { SecurityLayoutComponent } from './games/security-layout.component';
import { AboutRiotLayoutComponent } from './games/aboutriot-layout.component';
import { JobsLayoutComponent } from './games/jobs-layout.component';
import { AddGamesComponent } from './games/add-games/add-games.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'news', component: NewsLayoutComponent
  },
  {
    path: 'legal', component: LegalLayoutComponent
  },
  {
    path: 'security', component: SecurityLayoutComponent
  },
  {
    path: 'about-riot', component: AboutRiotLayoutComponent
  },
  {
    path: 'jobs', component: JobsLayoutComponent
  },
  {
    path: 'admin', component: AddGamesComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  },
];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
