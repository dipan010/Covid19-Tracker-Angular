import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoronaService } from './shared/corona.service';
import { DistrictComponent } from './district/district.component';
import { LandingComponent } from './landing/landing.component';
import { WorldhomeComponent } from './worldhome/worldhome.component';
import { CountruesComponent } from './countrues/countrues.component';
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
