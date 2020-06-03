import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCart;
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void { 
    this.getShoppingCart();
  }

  getShoppingCart(): void {
    this.shoppingCartService.getShoppingCart()
      .subscribe(shoppingCart => this.shoppingCart = shoppingCart);
  }

  increaseCartItemQuantity(productId: number): void {
    this.shoppingCartService.changeCartItemQuantity(productId, '+')
      .subscribe(shoppingCart => this.shoppingCart = shoppingCart);
  }

  decreaseCartItemQuantity(productId: number): void {
    this.shoppingCartService.changeCartItemQuantity(productId, '-')
      .subscribe(shoppingCart => this.shoppingCart = shoppingCart);
  }

  closeShoppingCartPanel(): void {
    const shoppingCartPanel = document.getElementById('cart-panel');
    shoppingCartPanel.style.display = 'none';
  }

  openAddressPanel(): void {
    this.closeShoppingCartPanel();
    const addressPanel = document.getElementById('address-panel');
    addressPanel.style.display = 'block';
  }
}