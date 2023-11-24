import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { ORDER_ADD_PAYMENT } from '../shared/models/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  createPayment(payment: Order): Observable<{ redirect: string }> {
    return this.http.post<{ redirect: string }>(ORDER_ADD_PAYMENT, payment);
  }
}
