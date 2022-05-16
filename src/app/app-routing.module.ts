import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsPageComponent } from './components/continents-page/continents-page.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HomeComponent } from './components/home/home.component';
import { NOTFOUNDComponent } from './components/not-found/not-found.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'countries', component: CountriesComponent},
                        {path: 'countries/:continent', component: CountriesComponent},
                        {path: 'countries/details/:name', component: CountryDetailsComponent},
                        {path: 'countries/:name', component: CountriesComponent},
                        {path: 'continents', component: ContinentsPageComponent},
                        {path: '**', component: NOTFOUNDComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
