import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdetailsService } from '../formdetails.service';

@Component({
  selector: 'app-get-eligible',
  templateUrl: './get-eligible.component.html',
  styleUrls: ['./get-eligible.component.css'],
  providers:[FormdetailsService]

})
export class GetEligibleComponent implements OnInit {

  Name:string='';
  Age:number=0;
  Gender:string='';
  TypeOfEmployement:string='';
  YearSalary:number=0;
  ExistingEMI:number=0;
  Mobile:number=0;
  Email:string='';
  AckMsg:string='';
  Result:string='';

  constructor(private service: FormdetailsService,private _router : Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    var DetailsObject={
      CustomerID:0,
      Name:this.Name.trim(),
      Age:this.Age,
      Gender:this.Gender.trim(),
      TypeOfEmployement: this.TypeOfEmployement.trim(),
      YearSalary: this.YearSalary,
      ExistingEMI:this.ExistingEMI,
      Mobile:this.Mobile,
      Email:this.Email.trim()

    }
    this.service.ServiceMethodCustomerRegistration(DetailsObject).subscribe();
    this.AckMsg = "Customer registered successfully";
    if(DetailsObject.Age>23 && DetailsObject.YearSalary>=300000){
      this._router.navigateByUrl('/LoanOffers');
    }

  }
  }


