import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { country } from '../../country.model';
import { CoronaService } from '../../shared/corona.service';

@Component({
  selector: 'app-countrues',
  templateUrl: './countrues.component.html',
  styleUrls: ['./countrues.component.css']
})
export class CountruesComponent implements OnInit {
  countries$: country[]

  constructor( private cs: CoronaService, private router: Router) { }

  ngOnInit() {
    return this.cs.getDataCountryWise()
    .subscribe(data => this.countries$ = data);
  }

  onSelect(country){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        country: country.country,
        cases: country.cases,
        active: country.active,
        recovered: country.recovered,
        deaths: country.deaths,
        casesPerOneMillion: country.casesPerOneMillion,
        deathsPerOneMillion: country.deathsPerOneMillion,
        activePerOneMillion: country.activePerOneMillion,
        recoveredPerOneMillion: country.recoveredPerOneMillion
      }
    }
    this.router.navigate(["world-country"], navigationExtras)
  }

}
