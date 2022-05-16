import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-continents-page',
  templateUrl: './continents-page.component.html',
  styleUrls: ['./continents-page.component.css']
})
export class ContinentsPageComponent implements OnInit {

  continent: string= '';
  constructor(private apiService: ApiService){}

  setContinentAfrica(){
    this.continent = 'Africa'
    this.apiService.getpaysByContinent(this.continent);
  }
  setContinentAmerica(){
    this.continent = 'Americas'
    this.apiService.getpaysByContinent(this.continent);
    
  }
  setContinentAsia(){
    this.continent = 'Asia'
    this.apiService.getpaysByContinent(this.continent);
  }
  setContinentEurope(){
    this.continent = 'Europe'
    this.apiService.getpaysByContinent(this.continent);
  }
  setContinentAustralia(){
    this.continent = 'Oceania'
    this.apiService.getpaysByContinent(this.continent);
  }
  

  ngOnInit(): void {
  }

}
