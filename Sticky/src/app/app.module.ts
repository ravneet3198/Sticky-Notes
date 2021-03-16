import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {StickyserviceService} from './stickyservice.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickynoteComponent } from './stickynote/stickynote.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddstickyComponent } from './addsticky/addsticky.component';
import { UpdatestickyComponent } from './updatesticky/updatesticky.component';
import {FormsModule} from '@angular/forms'
import {DragDropModule} from '@angular/cdk/drag-drop'


@NgModule({
  declarations: [
    AppComponent,
    StickynoteComponent,
    AddstickyComponent,
    UpdatestickyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    DragDropModule
  ],
  providers: [StickyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
