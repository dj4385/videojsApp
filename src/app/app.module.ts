import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player/video-player.component';
import { VrPlayerComponent } from './video-player/vr-player/vr-player.component';
import { ImaAdsComponent } from './video-player/ima-ads/ima-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VrPlayerComponent,
    ImaAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
