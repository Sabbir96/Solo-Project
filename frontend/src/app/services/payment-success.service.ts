import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PAYMENT_SUCCESS } from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PaymentSuccessService {

  constructor(private http:HttpClient) { }

  getPaymentStatus():Observable<{redirect:string}>
  {
    return this.http.get<{redirect:string}>(PAYMENT_SUCCESS);
  }
}
