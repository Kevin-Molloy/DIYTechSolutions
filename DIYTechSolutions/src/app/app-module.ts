import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomeList } from './home-list/home-list';
import { DistancePipe } from './distance-pipe';

@NgModule({
  declarations: [
    HomeList,
    DistancePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeList]
})
export class AppModule { }
