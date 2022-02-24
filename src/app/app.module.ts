import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TopNavBarComponent } from './navigation/topnavbar.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';

import { MainGameCardComponent } from './games/MainGame.card.component';
import { SmallGameCardComponent } from './games/SmallGame.card.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeLayoutComponent } from './games/home-layout.component';
import { NewsLayoutComponent } from './games/news-layout.component';
import { SecurityLayoutComponent } from './games/security-layout.component';
import { LegalLayoutComponent } from './games/legal-layout.component';
import { AboutRiotLayoutComponent } from './games/aboutriot-layout.component';
import { JobsLayoutComponent } from './games/jobs-layout.component';

import { JobPositionComponent } from './games/job-position.component';
import { UniversityCardComponent } from './games/jobs.university.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    MainGameCardComponent,
    SmallGameCardComponent,
    HomeLayoutComponent,
    NewsLayoutComponent,
    LegalLayoutComponent,
    SecurityLayoutComponent,
    AboutRiotLayoutComponent,
    JobsLayoutComponent,
    JobPositionComponent,
    UniversityCardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
