import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NewsLayoutComponent } from './games/news-layout.component';
import { HomeLayoutComponent } from './games/home-layout.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'news', component: NewsLayoutComponent
  }
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
