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

  onSelect(countries){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        country: countries.country,
        cases: countries.cases,
        active: countries.active,
        recovered: countries.recovered,
        deaths: countries.deaths,
        casesPerOneMillion: countries.casesPerOneMillion,
        deathsPerOneMillion: countries.deathsPerOneMillion,
        activePerOneMillion: countries.activePerOneMillion,
        recoveredPerOneMillion: countries.recoveredPerOneMillion
      }
    }
    this.router.navigate(["country"], navigationExtras)
  }

}
