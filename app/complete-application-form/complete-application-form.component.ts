import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, MinValidator, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-complete-application-form',
  templateUrl: './complete-application-form.component.html',
  styleUrls: ['./complete-application-form.component.css']
})
export class CompleteApplicationFormComponent implements OnInit {
  hide = true;
  isEditable=false;
  isLinear=false;
  DetailsForm: FormGroup;
  PersonalDetails:FormGroup;
  EmployementDetails:FormGroup;
  VehicleDetails:FormGroup;
  LoanDetails:FormGroup;
  IdentityDetails:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.DetailsForm=new FormGroup(
      {
        'name':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required, Validators.email]),
        'gender':new FormControl('male')
      }
    );
    this.PersonalDetails=this.fb.group({
      name:['',Validators.required],
      age:[null,[Validators.required,Validators.min(18)]],
      gender:['Male',Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      address:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pincode:[null,Validators.required]
    });
    this.EmployementDetails=this.fb.group({
      typeOfEmployment:['',Validators.required],
      annualSalary:[null,Validators.required],
      existingEMI:[null,Validators.required]
    });
    this.VehicleDetails=this.fb.group({
      carMake:['',Validators.required],
      carModel:['',Validators.required],
      exShowroomPrice:[null,Validators.required]
    });
    this.LoanDetails=this.fb.group({
      loanAmount:[null,Validators.required],
      loanTenure:[null,Validators.required],
      rateofInterest:[null,Validators.required]
    });

  }

  onSubmit(){
    console.log(this.DetailsForm);
    console.log(this.DetailsForm.get('name')?.value);
    this.DetailsForm.reset();
  }

  personalDetailSubmit(){
    let UserName=this.PersonalDetails.get('name')?.value;
    console.log(UserName);
  }

  EmployementDetailsSubmit(){

  }

  VehicleDetailsSubmit(){

  }

  LoanDetailsSubmit(){

  }

}
