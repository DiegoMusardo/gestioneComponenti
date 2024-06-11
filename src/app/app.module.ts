import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruppoTransazioniComponent } from './gruppo-transazioni/gruppo-transazioni.component';
import { TransazioneComponent } from './transazione/transazione.component';

@NgModule({
  declarations: [
    AppComponent,
    GruppoTransazioniComponent,
    TransazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
