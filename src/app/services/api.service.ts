import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Country } from '../components/country/model/country';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  countries = COUNTRIES;

  selectedCountry:Country | null = null;

  filteredCountries : Country[] = [];
  filteredCountriesByContinent: Country[]= [];
  
  
  constructor(private routerService: Router) { }

  getCountries(name: string): Observable<any[]>{
    if (name.trim() == ''){
      return of (this.countries);
    }
    else{
    this.filteredCountries = this.countries.filter((countri) => {
      
      return countri?.name?.common?.toLowerCase().includes(name.toLowerCase());
    });
    return of (this.filteredCountries);
    }
  }
  getCountriesByContinent(continent: string): Observable<any[]>{
    this.countries = COUNTRIES;
    this.routerService.navigate(['/countries', continent]);
    this.filteredCountriesByContinent = this.countries.filter((country)=>{
      return country.region?.toLowerCase() === continent.toLowerCase();
    })
    this.countries = this.filteredCountriesByContinent;
    return of (this.filteredCountries);
  }
  
  setCountry(country : Country){
    this.selectedCountry = country;
  }
  getCountry(){
    return this.selectedCountry;
  }
  resetCountries(){
    this.countries = COUNTRIES;
  }
}
