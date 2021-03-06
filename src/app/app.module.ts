import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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
import { JobsInfoCardComponent } from './games/jobs.info.card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddGamesComponent } from './games/add-games/add-games.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    UniversityCardComponent,
    JobsInfoCardComponent,
    UserInfoComponent,
    AddGamesComponent,
    AuthenticationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
