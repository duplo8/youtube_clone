import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    VideoPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule.forRoot([      
      {path: '', redirectTo: 'main-page', pathMatch: 'full'},
      {path: 'main-page', component: MainPageComponent},
      {path: 'video-page', component: VideoPageComponent},
      {path: 'profile-page', component: ProfilePageComponent},
      {path: '', redirectTo: 'main-page', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
