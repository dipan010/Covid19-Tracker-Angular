import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountruesComponent } from './components/countrues/countrues.component';
//import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
//import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component:LandingComponent },
  { path: 'country', component:CountruesComponent }
  //{ path: 'helpful', component: HelpfulLinksComponent },
  //{ path: 'faq',      component: FAQComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
