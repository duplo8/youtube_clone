import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { VideoComponent } from './video/video.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot([
    { path: '', component: MainPageComponent },
    { path: 'video', component: VideoComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: 'main-page', pathMatch: 'full' }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
