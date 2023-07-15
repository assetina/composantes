import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    DetailsComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
