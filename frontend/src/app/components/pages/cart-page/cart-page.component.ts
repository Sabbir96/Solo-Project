import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
  // increaseQuantity(cartItem: CartItem) {
  //   cartItem.quantity++;

  // }

  // decreaseQuantity(cartItem: CartItem) {
  //   if (cartItem.quantity > 1) {
  //     cartItem.quantity--;

  //   }
  // }

  // updateQuantity(cartItem: CartItem) {
  //   cartItem.quantity = parseInt(cartItem.quantity as any, 10); // Ensure it's a number
  //   if (cartItem.quantity < 1) {
  //     cartItem.quantity = 1;
  //   }
  //   this.updateCart();
  // }

  // updateCart() {
  //   // Whenever you change a quantity, update the cart in the service.
  //   this.cartService.updateCart(this.cart).subscribe((cart: Cart) => {
  //     this.cart = cart;
  //   }, (error: any) => {
  //     console.error(error);
  //   });
  // }
}
