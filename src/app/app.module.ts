import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { VideoService } from './content/video.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowComponent } from './content/show/show.component';
import { ListComponent } from './content/list/list.component';
import { ConfigComponent } from './content/config/config.component';
import { VideoComponent } from './content/show/video/video.component';
import { AddVclipComponent } from './content/list/add-vclip/add-vclip.component';
import { reducers } from './app.reducer';


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
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
