import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PAYMENT_CANCEL } from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class PaymentCancelService {
  constructor(private http: HttpClient) {}

  getPaymentStatus(): Observable<{ redirect: string }> {
    return this.http.get<{ redirect: string }>(PAYMENT_CANCEL);
  }
}
