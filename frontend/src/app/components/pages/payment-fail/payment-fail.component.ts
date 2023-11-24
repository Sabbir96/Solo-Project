import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentFailService } from 'src/app/services/payment-fail.service';

@Component({
  selector: 'app-payment-fail',
  templateUrl: './payment-fail.component.html',
  styleUrls: ['./payment-fail.component.css'],
})
export class PaymentFailComponent {
  constructor(
    private paymentFailService: PaymentFailService,
    private router: Router
  ) {
    paymentFailService.getPaymentStatus().subscribe({
      next: () => {
        this.router.navigateByUrl('/payment-fail');
      },
      // error: () => {
      //   this.router.navigateByUrl('/checkout');
      // }
    });
  }
}
