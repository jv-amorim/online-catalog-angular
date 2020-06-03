import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CartItem } from '../models/cart-item';
import { PRODUCTS } from '../models/product-mock';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  private cartItems: CartItem[] = [];
  
  constructor() {
    PRODUCTS.forEach(product => 
      this.cartItems.push({ product: product, quantity: 0, totalPrice: 0 })
    );
  }

  getAllCartItems(): Observable<CartItem[]> {
    return of(this.cartItems);
  }

  getCartTotalPrice(): Observable<number> {
    return of(this.cartItems.reduce((total, current) => total + current.totalPrice, 0));
  }

  getCartTotalItems(): Observable<number> {
    return of(this.cartItems.reduce((total, current) => total + current.quantity, 0));
  }

  changeCartItemQuantity(productId: number, operation: string): Observable<CartItem[]> {
    
    const index = this.cartItems.findIndex(c => c.product.id == productId);

    if (index !== -1) {
      if (operation === '+')
        this.cartItems[index].quantity++;
      else if (operation === '-')
        this.cartItems[index].quantity--;

      this.cartItems[index].totalPrice = this.calculateCartItemTotalPrice(index);
    }
    
    return of(this.cartItems);
  }

  private calculateCartItemTotalPrice(cartItemIndex: number): number {
    const cartItem = this.cartItems[cartItemIndex];
    return cartItem.quantity * cartItem.product.price;
  }
}