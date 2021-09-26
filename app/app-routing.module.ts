import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteApplicationFormComponent } from './complete-application-form/complete-application-form.component';
import { GetEligibleComponent } from './get-eligible/get-eligible.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'getEligible', component:GetEligibleComponent},
  {path:'LoanOffers', component:LoanOffersComponent},
  {path:'ApplicationForm', component:CompleteApplicationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
