import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../shared/corona.service';

@Component({
  selector: 'app-countrues',
  templateUrl: './countrues.component.html',
  styleUrls: ['./countrues.component.css']
})
export class CountruesComponent implements OnInit {
  //countries$: Country[]
  DataCountryWise: Array<any> = [
    { 
    updated:'', 
    country:'', 
    cases:'', 
    deaths:'', 
    recovered:'', 
    active:'', 
    continent:'' 
    }
  ]
  constructor( private cs: CoronaService) { }

  ngOnInit() {
    return this.cs.getDataCountryWise()
    .subscribe(data => this.DataCountryWise = data);
  }

}
