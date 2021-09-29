import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdetailsService {

  constructor(private http:HttpClient) { }

  ServiceMethodCustomerRegistration(val:any){
    return this.http.post('http://localhost:12765/api/GetEligibles',val);
  }
}
