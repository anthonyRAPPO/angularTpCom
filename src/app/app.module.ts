import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { HeroListComponent } from './hero-list/hero-list.component';


import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
