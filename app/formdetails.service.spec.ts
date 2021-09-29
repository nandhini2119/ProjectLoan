import { TestBed } from '@angular/core/testing';

import { FormdetailsService } from './formdetails.service';

describe('FormdetailsService', () => {
  let service: FormdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
