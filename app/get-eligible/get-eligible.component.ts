import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-eligible',
  templateUrl: './get-eligible.component.html',
  styleUrls: ['./get-eligible.component.css']
})
export class GetEligibleComponent implements OnInit {

  @ViewChild('eligibleForm') EForm: NgForm;
  //for getting values that are submitted by the user in the form
  submitted=false;
  userData ={
    carMake:'',
    carModel:'',
    ExShowPrice:0,
    OnRoadPrice:0,
    Name:'',
    Age:0,
    Gender:'',
    TypeOfEmp:'',
    YearSalary:0,
    ExistingEMI:0,
    Mobile:0,
    Email:''
  };
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    /*console.log(this.EForm.value);
    console.log('car Make:'+ this.EForm.controls['carMake'].value);
    console.log(this.userData.carMake);*/
    this.submitted=true;
    this.userData.carMake=this.EForm.value.carMake;
    this.userData.carModel=this.EForm.value.carModel;
    this.userData.ExShowPrice=this.EForm.value.showRoomprice;
    this.userData.OnRoadPrice=this.EForm.value.onRoadprice;
    this.userData.Name=this.EForm.value.Name;
    this.userData.Age=this.EForm.value.Age;
    this.userData.Gender=this.EForm.value.gender;
    this.userData.TypeOfEmp=this.EForm.value.typeOfEmployment;
    this.userData.YearSalary=this.EForm.value.salary;
    this.userData.ExistingEMI=this.EForm.value.ExistingEMI;
    this.userData.Mobile=this.EForm.value.Mobile;
    this.userData.Email=this.EForm.value.emailid;

    if(this.userData.Age > 18){
      this._router.navigateByUrl('/LoanOffers');
    }
  }

}
