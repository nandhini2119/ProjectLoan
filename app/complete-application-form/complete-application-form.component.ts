import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, MinValidator, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { Router,ActivatedRoute} from '@angular/router';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-complete-application-form',
  templateUrl: './complete-application-form.component.html',
  styleUrls: ['./complete-application-form.component.css']
})
export class CompleteApplicationFormComponent implements OnInit {
//data from loan offer
data:any;
lamount:number=0;
lyear:number=0;
linterest:number=0;


  hide = true;
  isEditable=false;
  isLinear=true;
  PersonalDetails:FormGroup;
  FirstName:string='';
  Age:number=0;
  Gender:string='';
  MobileNumber:string='';
  EmailId:string='';
  Password:string='';
  Address:string='';
  State:string='';
  City:string='';
  PinCode:string='';


  EmployementDetails:FormGroup;
  TypeOfEmployment:string='';
  AnnualSalary:number=0;
  ExistingEMI:number=0;


  VehicleDetails:FormGroup;
  Carmake:string='';
  CarModel:string='';
  ExShowroomPrice:number=0;

  LoanDetails:FormGroup;
  LoanAmount:number=0;
  LoanTenure:number=0;
  RateOfInterest:number=0;

  IdentityDetails:FormGroup;

  constructor(private fb: FormBuilder, private service:SharedService,private _router : Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.data=JSON.parse(params.data);
      console.log(this.data);
    });
    this.lamount=this.data.Amount;
    this.lyear=this.data.Year;
    this.linterest=this.data.Interest;

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
      pincode:['',Validators.required]
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
     /* loanAmount:[null,Validators.required],
     loanTenure:[null,Validators.required],
      rateofInterest:[null,Validators.required]*/
      loanAmount:this.lamount,
      loanTenure:this.lyear,
      rateofInterest:this.linterest
    });
   /* this.IdentityDetails=this.fb.group({
      upload:['']
    });*/

  }

  personalDetailSubmit(){
   /* var logindetails={
      UId:0,
      email:this.PersonalDetails.get('email')?.value,
      password:this.PersonalDetails.get('password')?.value
    };*/
    var PersonalObject={
      EmailId:this.PersonalDetails.get('email')?.value,
      CustomerId:0,
      FirstName:this.PersonalDetails.get('name')?.value,
      Age:this.PersonalDetails.get('age')?.value,
      Gender:this.PersonalDetails.get('gender')?.value,
      MobileNumber:this.PersonalDetails.get('mobile')?.value,
      Address:this.PersonalDetails.get('address')?.value,
      State:this.PersonalDetails.get('state')?.value,
      City:this.PersonalDetails.get('city')?.value,
      PinCode:this.PersonalDetails.get('pincode')?.value,
      Password:this.PersonalDetails.get('password')?.value
    };
    this.service.addPersonalDetails(PersonalObject).subscribe(
      res=>{alert(res.toString());
      });
    /*this.service.addLoginDetails(logindetails).subscribe(
        res=>{alert(res.toString());
        });*/
    console.log(PersonalObject);
}

  EmployementDetailsSubmit(){
    var EmployeeObject={
      EId:0,
      EmailId:this.PersonalDetails.get('email')?.value,
      TypeOfEmployment:this.EmployementDetails.get('typeOfEmployment')?.value,
      AnnualSalary:this.EmployementDetails.get('annualSalary')?.value,
      ExistingEMI:this.EmployementDetails.get('existingEMI')?.value
    };
    this.service.addEmployeeDetails(EmployeeObject).subscribe(
      res=>{alert(res.toString());
      });
      console.log(EmployeeObject);

  }

  VehicleDetailsSubmit(){
    var VehicleObject={
      VId:0,
      EmailId:this.PersonalDetails.get('email')?.value,
      Carmake:this.VehicleDetails.get('carMake')?.value,
      CarModel:this.VehicleDetails.get('carModel')?.value,
      ExShowroomPrice:this.VehicleDetails.get('exShowroomPrice')?.value
    };
    this.service.addVehicleDetails(VehicleObject).subscribe(
      res=>{alert(res.toString());
      });
      console.log(VehicleObject);
  }

  LoanDetailsSubmit(){
    var LoanObject={
      LId:0,
      EmailId:this.PersonalDetails.get('email')?.value,
      LoanAmount:this.LoanDetails.get('loanAmount')?.value,
      LoanTenure:this.LoanDetails.get('loanTenure')?.value,
      RateOfInterest:this.LoanDetails.get('rateofInterest')?.value
    };
    this.service.addLoanDetails(LoanObject).subscribe(
      res=>{alert(res.toString());
      });
      console.log(LoanObject);
  }


/*for file upload
  onSelectedFile(event:any){
    if(event.target.files.length>0){
      const upload=event.target.files[0];
      this.IdentityDetails.get('upload')?.setValue(upload);
    }
  }

  IdentityDetailsSubmit(){
    const formData=new FormData();
    formData.append('Id','0');
    formData.append('upload',this.IdentityDetails.get('upload')?.value);
    console.log(formData);
    this.service.uploadFile(formData).subscribe(
      res=>{alert(res.toString());
      });
  }*/

}
