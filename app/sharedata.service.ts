import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  private data=new BehaviorSubject<string>("defaul data");
  public share=this.data.asObservable();
  constructor() { }
  updateData(text:any){
    this.data.next(text);
  }
}
