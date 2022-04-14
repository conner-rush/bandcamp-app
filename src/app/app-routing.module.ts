import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
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
import { AddProductComponent } from './forms/add-product/add-product.component';
import { AuthenticationComponent } from './auth/authentication.component';

const routes:Route [] = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'alternative', component: AlternativeComponent
  },
  {
    path:'ambient', component: AmbientComponent
  },
  {
    path:'electronic', component: ElectronicComponent
  },
  {
    path:'experimental', component: ExperimentalComponent
  },
  {
    path:'hiphop', component: HipHopComponent
  },
  {
    path:'metal', component: MetalComponent
  },
  {
    path:'pop', component: PopComponent
  },
  {
    path:'punk', component: PunkComponent
  },
  {
    path:'rock', component: RockComponent
  },
  {
    path: 'main-story', component: MainStoryComponent
  },
  {
    path: 'admin', component: AddProductComponent
  },

  {
    path: 'auth-test', component: AuthenticationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
