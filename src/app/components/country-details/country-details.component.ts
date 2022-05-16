import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../country/model/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country:Country | null = null;

  languages:string = '';


  constructor(private apiService: ApiService, private routerService:Router) { }

  ngOnInit(): void {
    this.country =this.apiService.getCountry();
    this.languages = Object.values({...this.country?.languages}).toString();
  }
  navigateToCountries(){
    this.routerService.navigate(['/countries']);
  }

}
