import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoronaService implements OnInit {
  data1
  state
  district
  BannerData: BehaviorSubject<any> = new BehaviorSubject('')
  districtdata: Subject<any> = new Subject<any>();

  url_statewise = 'https://api.covidindiatracker.com/state_data.json'
  url_dailycases = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history'
  url_districtwise = "https://api.covid19india.org/v2/state_district_wise.json"
  url_banner = "https://api.covid19india.org/website_data.json"
  url_countrywise = " http://api.coronastatistics.live/countries"
  url_totalIndia = "https://api.covidindiatracker.com/total.json"
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    this.getDataStateWise()
  }

  getBanners(): Observable<any> {
    return this.http.get(this.url_banner)
  }

  getDataStateWise(): Observable<any> {
    return this.http.get(this.url_statewise)
  }

 getDailyCaseStatus(): Observable<any> {
    return this.http.get(this.url_dailycases)
  }

  getDataCountryWise(): Observable<any>{
    return this.http.get(this.url_countrywise)
  }

  getState(state) {
    this.state = state
  }

  getTotalIndia():Observable<any>{
    return this.http.get(this.url_totalIndia)
  }

  getDataDistrictWise(state) {
    this.http.get(this.url_districtwise).subscribe(data => {
      this.data1 = data
    //  console.log(this.data1)
   //   console.log(this.data1[state])
      this.district = this.data1[state].districtData
    //  console.log(state)
      this.districtdata.next(this.district)
    }
    )
  }

}