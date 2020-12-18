import { Component, OnInit } from '@angular/core';
import { country } from '../country.model';
import { CoronaService } from '../shared/corona.service';

@Component({
  selector: 'app-countrues',
  templateUrl: './countrues.component.html',
  styleUrls: ['./countrues.component.css']
})
export class CountruesComponent implements OnInit {
  countries$: country[]

  constructor( private cs: CoronaService) { }

  ngOnInit() {
    return this.cs.getDataCountryWise()
    .subscribe(data => this.countries$ = data);
  }

}
