import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Country } from '../components/country/model/country';
import { COUNTRIES } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pays = COUNTRIES;

  selectedCountry:Country | null = null;

  filteredpays : Country[] = [];
  filteredpaysByContinent: Country[]= [];
  
  
  constructor(private routerService: Router) { }

  getpays(name: string): Observable<any[]>{
    if (name.trim() == ''){
      return of (this.pays);
    }
    else{
    this.filteredpays = this.pays.filter((countri) => {
      
      return countri?.name?.common?.toLowerCase().includes(name.toLowerCase());
    });
    return of (this.filteredpays);
    }
  }
  getpaysByContinent(continent: string): Observable<any[]>{
    this.pays = COUNTRIES;
    this.routerService.navigate(['/pays', continent]);
    this.filteredpaysByContinent = this.pays.filter((country)=>{
      return country.region?.toLowerCase() === continent.toLowerCase();
    })
    this.pays = this.filteredpaysByContinent;
    return of (this.filteredpays);
  }
  
  setCountry(country : Country){
    this.selectedCountry = country;
  }
  getCountry(){
    return this.selectedCountry;
  }
  resetpays(){
    this.pays = COUNTRIES;
  }
}
