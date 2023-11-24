import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PaymentSuccessService } from 'src/app/services/payment-success.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {

constructor(
    
    private paymentSuccessService: PaymentSuccessService,
    private router:Router

) {

  paymentSuccessService.getPaymentStatus().subscribe({
    next:()=>{
      this.router.navigateByUrl  ('/payment-success');
     
    },
  
  })
}

}


  

