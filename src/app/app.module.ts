import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { MainGameCardComponent } from './games/MainGame.card.component';
import { SmallGameCardComponent } from './games/SmallGame.card.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsLayoutComponent } from './games/news-layout.component';
import { HomeLayoutComponent } from './games/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    MainGameCardComponent,
    SmallGameCardComponent,
    NewsLayoutComponent,
    HomeLayoutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
