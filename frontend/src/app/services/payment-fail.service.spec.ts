import { TestBed } from '@angular/core/testing';

import { PaymentFailService } from './payment-fail.service';

describe('PaymentFailService', () => {
  let service: PaymentFailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentFailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
