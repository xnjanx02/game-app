import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { ViewGamesComponent } from './view-games/view-games.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGamesComponent,
    ViewGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
