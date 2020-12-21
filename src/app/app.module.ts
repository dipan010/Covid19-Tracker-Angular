import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoronaService } from './shared/corona.service';
//import { DistrictComponent } from './components/district/district.component';
import { LandingComponent } from './landing/landing.component';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountruesComponent } from './components/countrues/countrues.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { DistrictDetailComponent } from './components/district-detail/district-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';

//import { HomeCountryComponent } from './components/home-country/home-country.component';
//import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
//import { FAQComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //DistrictComponent,
    LandingComponent,
    WorldhomeComponent,
    CountruesComponent,
    CountryDetailComponent,
    DistrictDetailComponent,
    SidebarNavComponent,
    //HomeCountryComponent,
    //HelpfulLinksComponent,
    //FAQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BottomNavModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
