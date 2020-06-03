import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { CartItem } from '../models/cart-item';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css', './product-item.css']
})

export class CatalogComponent implements OnInit {
  cartItems: CartItem[] = [];
  faShoppingCart = faShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void { 
    this.getCartItems();
  }

  getCartItems(): void {
    this.shoppingCartService.getAllCartItems()
      .subscribe(cartItems => this.cartItems = cartItems);
  }

  increaseCartItemQuantity(productId: number): void {
    this.shoppingCartService.changeCartItemQuantity(productId, '+')
      .subscribe(cartItems => this.cartItems = cartItems);
  }
}