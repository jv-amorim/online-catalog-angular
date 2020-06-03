import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CartItem } from '../models/cart-item';
import { ShoppingCart } from '../models/shopping-cart';
import { PRODUCTS } from '../models/product-mock';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  private shoppingCart: ShoppingCart;
  
  constructor() {
    this.shoppingCart = new ShoppingCart([], 0, 0);
    PRODUCTS.forEach(product => 
      this.shoppingCart.cartItems
      .push({ product: product, quantity: 0, subtotalPrice: 0 })
    );
  }

  getShoppingCart(): Observable<ShoppingCart> {
    return of(this.shoppingCart);
  }

  getAllCartItems(): Observable<CartItem[]> {
    return of(this.shoppingCart.cartItems);
  }

  changeCartItemQuantity(productId: number, operation: string): Observable<ShoppingCart> {
    const index = this.shoppingCart.cartItems.findIndex(c => c.product.id == productId);

    if (index !== -1) {
      if (operation === '+')
        this.shoppingCart.cartItems[index].quantity++;
      else if (operation === '-')
        this.shoppingCart.cartItems[index].quantity--;

      this.shoppingCart.cartItems[index].subtotalPrice = this.calculateSubtotalPrice(index);
      this.shoppingCart.totalPrice = this.calculateCartTotalPrice();
      this.shoppingCart.totalItems = this.calculateCartTotalItems();
    }
    
    return of(this.shoppingCart);
  }

  private calculateSubtotalPrice(cartItemIndex: number): number {
    const cartItem = this.shoppingCart.cartItems[cartItemIndex];
    return cartItem.quantity * cartItem.product.price;
  }

  private calculateCartTotalPrice(): number {
    return (
      this.shoppingCart.cartItems
      .reduce((total, current) => total + current.subtotalPrice, 0)
    );
  }

  private calculateCartTotalItems(): number {
    return (
      this.shoppingCart.cartItems
      .reduce((total, current) => total + current.quantity, 0)
    );
  }
}