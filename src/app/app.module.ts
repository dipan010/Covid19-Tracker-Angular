import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoronaService } from './shared/corona.service';
import { DistrictComponent } from './components/district/district.component';
import { LandingComponent } from './landing/landing.component';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountruesComponent } from './components/countrues/countrues.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
//import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
//import { FAQComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    LandingComponent,
    WorldhomeComponent,
    CountruesComponent,
    CountryDetailComponent,
    //HelpfulLinksComponent,
    //FAQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
