import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrls: ['./loan-offers.component.css']
})
export class LoanOffersComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  submitting(){
    console.log("it works actually");
    this._router.navigateByUrl('/ApplicationForm');
  }

}
