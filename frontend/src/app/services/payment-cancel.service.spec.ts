import { TestBed } from '@angular/core/testing';

import { PaymentCancelService } from './payment-cancel.service';

describe('PaymentCancelService', () => {
  let service: PaymentCancelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCancelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
