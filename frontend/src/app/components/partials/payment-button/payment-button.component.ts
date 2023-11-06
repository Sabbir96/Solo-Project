import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.css']
})
export class PaymentButtonComponent {

  @Input()
  order!:Order;

  openCheckout() {
    
  }
}