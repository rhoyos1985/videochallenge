import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowComponent } from './content/show/show.component';
import { ListComponent } from './content/list/list.component';
import { ConfigComponent } from './content/config/config.component';
import { VideoComponent } from './content/show/video/video.component';
import { AddVclipComponent } from './content/list/add-vclip/add-vclip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowComponent,
    ListComponent,
    ConfigComponent,
    VideoComponent,
    AddVclipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
