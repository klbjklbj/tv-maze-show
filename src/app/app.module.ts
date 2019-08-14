import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTvmazeshowComponent } from './my-tvmazeshow/my-tvmazeshow.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTvmazeshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
