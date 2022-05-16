import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
import { ContinentsPageComponent } from './components/continents-page/continents-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { NOTFOUNDComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    HomeComponent,
    ContinentsPageComponent,
    NavBarComponent,
    CountryDetailsComponent,
    NOTFOUNDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
