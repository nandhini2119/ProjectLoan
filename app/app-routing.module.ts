import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompleteApplicationFormComponent } from './complete-application-form/complete-application-form.component';
import { GetEligibleComponent } from './get-eligible/get-eligible.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'getEligible', component:GetEligibleComponent},
  {path:'LoanOffers', component:LoanOffersComponent},
  {path:'ApplicationForm', component:CompleteApplicationFormComponent},
  {path:'UserLogin', component:LoginComponent},
  {path:'AdminLogin', component:AdminLoginComponent},
  {path:'AdminDashboard', component:AdminDashboardComponent},
  {path:'UserDashboard', component:UserDashboardComponent,
  children: [
    { path: 'loanAmount', loadChildren: './getEligible' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
