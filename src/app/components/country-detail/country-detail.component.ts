import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: number;
  population: number;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  testsPerOneMillion: number;
  tests:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.country = params["country"];
      this.population = params["population"];
      this.cases = params["cases"];
      this.active = params["active"];
      this.recovered = params["recovered"];
      this.deaths = params["deaths"];
      this.casesPerOneMillion = params["casesPerOneMillion"];
      this.deathsPerOneMillion = params["deathsPerOneMillion"];
      this.activePerOneMillion = params["activePerOneMillion"];
      this.recoveredPerOneMillion = params["recoveredPerOneMillion"]
      this.testsPerOneMillion = params["testsPerOneMillion"];
      this.tests = params["tests"]
    })
  }
}
