import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer-component';
import { HeaderComponent } from './header/header-component';
import { MainCardComponent } from './cards/main-card';
import { Filter1Component } from './filter-bars/filter-bar-1';
import { SideCardComponent } from './cards/sidecards/side-card';
import { AppRoutingModule } from './app-routing.module';
import { MainStoryComponent } from './routing/main-story.component';
import { HomeComponent } from './routing/home.component';
import { LoginComponent } from './routing/login.component';
import { AlternativeComponent } from './routing/genres/alternative.component';
import { AmbientComponent } from './routing/genres/ambient.component';
import { ElectronicComponent } from './routing/genres/electronic.component';
import { ExperimentalComponent } from './routing/genres/experimental.component';
import { HipHopComponent } from './routing/genres/hip-hop.component';
import { MetalComponent } from './routing/genres/metal.component';
import { PopComponent } from './routing/genres/pop.component';
import { PunkComponent } from './routing/genres/punk.component';
import { RockComponent } from './routing/genres/rock.component';
import { Header2Component } from './header/header-component-2';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    FooterComponent,
    MainCardComponent,
    Filter1Component,
    SideCardComponent,
    MainStoryComponent,
    HomeComponent,
    LoginComponent,
    AlternativeComponent,
    AmbientComponent,
    ElectronicComponent,
    ExperimentalComponent,
    HipHopComponent,
    MetalComponent,
    PopComponent,
    PunkComponent,
    RockComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
