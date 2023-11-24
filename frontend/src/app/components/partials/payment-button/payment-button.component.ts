import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/Order';
import { Inject } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.css'],
})
export class PaymentButtonComponent {
  @Input()
  order!: Order;


  constructor(
    private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  checkout() {
    this.paymentService.createPayment(this.order).subscribe({
      next: (order) => {
        console.log(order.redirect);
        window.location.href = order.redirect;
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
