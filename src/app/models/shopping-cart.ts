import { CartItem } from './cart-item';

export class ShoppingCart {
    cartItems: CartItem[];
    totalPrice: number;
    totalItems: number;

    constructor(cartItems: CartItem[], totalPrice: number, totalItems: number) {
        this.cartItems = cartItems;
        this.totalPrice = totalPrice;
        this.totalItems = totalItems;
    }
}