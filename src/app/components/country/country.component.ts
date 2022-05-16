import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Country } from './model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country | undefined;
  
  constructor(private apiService: ApiService, private routerService: Router) { }

  ngOnInit(): void {
  }
  onSeclectCountry(){
    if (this.country){
      this.routerService.navigate(['/countries/details',  this.country?.name?.common]);
      this.apiService.setCountry(this.country);
    }
  }
}
