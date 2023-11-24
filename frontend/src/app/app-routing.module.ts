import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { PaymentSuccessComponent } from './components/pages/payment-success/payment-success.component';
import { PaymentFailComponent } from './components/pages/payment-fail/payment-fail.component';
import { PaymentCancelComponent } from './components/pages/payment-cancel/payment-cancel.component';
import { Order } from './shared/models/Order';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: RegisterPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  {
    path: 'payment-success',
    component: PaymentSuccessComponent,
  },
  { path: 'payment-fail', component: PaymentFailComponent },
  { path: 'payment-cancel', component: PaymentCancelComponent },

  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
