import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: number;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.country = params["country"];
      this.cases = params["cases"];
      this.active = params["active"];
      this.recovered = params["recovered"];
      this.deaths = params["deaths"];
      this.casesPerOneMillion = params["casesPerOneMillion"];
      this.deathsPerOneMillion = params["deathsPerOneMillion"];
      this.activePerOneMillion = params["activePerOneMillion"];
      this.recoveredPerOneMillion = params["recoveredPerOneMillion"]
    })
  }
}
