import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountruesComponent } from './components/countrues/countrues.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component'
import { DistrictDetailComponent } from './components/district-detail/district-detail.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component:LandingComponent },
  { path: 'country', component:CountruesComponent },
  { path: 'world-country', component:CountryDetailComponent},
  {path: 'State/:state', component: DistrictDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
