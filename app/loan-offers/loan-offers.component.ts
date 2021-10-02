import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { SharedataService } from '../sharedata.service';
@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrls: ['./loan-offers.component.css']
})
export class LoanOffersComponent implements OnInit {

  Amount=100000;
  Year=1;
  Interest=8;
  EMI=0;
  disp:boolean=false;

  constructor(private _router : Router,private route:ActivatedRoute, private data:SharedataService) { }

  ngOnInit(): void {
  }
  onChangeAmount(event:any){
    this.Amount=event.value;
    console.log(event);
  }
  onChangeYear(event:any){
    this.Year=event.value;
    console.log(event);
  }
  onChangeInterest(event:any){
    this.Interest=event.value;
    console.log(event);
  }
  OnSubmit(){
    let uphalf= Math.pow((1+this.Interest),this.Year);
    let downhalf = Math.pow((1+this.Interest),this.Year) - 1;
    let div= uphalf/downhalf;
    this.EMI = this.Amount * this.Interest * div;
    this.disp=true;
  }
  RedirectPage(){
    let data:any={
      Amount:this.Amount,
      Year:this.Year,
      Interest:this.Interest
    }
    console.log(data);
    this._router.navigate(['/ApplicationForm'],
    {queryParams:{data:JSON.stringify(data)}}
    );

  }
 /* submitting(){
    console.log("it works actually");
    this._router.navigateByUrl('/ApplicationForm');
  }*/

}
