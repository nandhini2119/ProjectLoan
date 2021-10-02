import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//added
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetEligibleComponent } from './get-eligible/get-eligible.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { CompleteApplicationFormComponent } from './complete-application-form/complete-application-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormdetailsService } from './formdetails.service';
import { SharedService } from './shared.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CalculatorComponent,
    GetEligibleComponent,
    LoanOffersComponent,
    CompleteApplicationFormComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,MatListModule,
    MatCardModule,AngularFileUploaderModule,
    MatDialogModule,MatInputModule,FormsModule, ReactiveFormsModule,
    MatStepperModule,MatMenuModule,MatSidenavModule,MatDividerModule,
    MatSelectModule,MatFormFieldModule,MatRadioModule,MatSliderModule

  ],
  providers: [FormdetailsService,HttpClientModule,SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[CalculatorComponent]

})
export class AppModule { }
