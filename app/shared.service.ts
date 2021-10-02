import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent,HttpErrorResponse,HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:56319/api";

  constructor(private http:HttpClient) { }

  addPersonalDetails(val:any){
    return this.http.post(this.APIUrl + '/PersonalDetails',val);
  }

  addEmployeeDetails(val:any){
    return this.http.post(this.APIUrl + '/EmploymentDetails',val);
  }
  addVehicleDetails(val:any){
    return this.http.post(this.APIUrl + '/VehicleDetails',val);
  }
  addLoanDetails(val:any){
    return this.http.post(this.APIUrl + '/LoanDetails',val);
  }
  /*uploadFile(formData:any){
    return this.http.post(this.APIUrl+'/IdentityDetails',formData,{
      reportProgress:true,
      observe:'events'
    } ).pipe();
  }*/
}
