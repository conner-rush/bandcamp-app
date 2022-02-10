import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer-component';
import { HeaderComponent } from './header/header-component';
import { MainCardComponent } from './cards/main-card';
import { Filter1Component } from './filter-bars/filter-bar-1';
import { SideCardComponent } from './cards/sidecards/side-card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainCardComponent,
    Filter1Component,
    SideCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
