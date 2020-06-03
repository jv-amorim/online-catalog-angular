import { Injectable } from '@angular/core';

import { ShoppingCart } from '../models/shopping-cart';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})

export class WhatsappOrderLinkService {
  phoneNumber = '5538988484205';

  constructor() { }

  generateOrderLinkForWhatsApp(shoppingCart: ShoppingCart, address: Address): string {
    let orderMessage = this.createOrderMessageForWhatsApp(shoppingCart);
    orderMessage = this.appendAddressToTheOrderMessage(orderMessage, address);

    const encodedMessage = encodeURI(orderMessage);
    const link = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    return link;
  }

  private createOrderMessageForWhatsApp(shoppingCart: ShoppingCart): string {
    let message = 'Olá! Desejo fazer um pedido: \n\n*Pedido:*\n';

    for (let index = 0; index < shoppingCart.cartItems.length; index++) {
        const cartItem = shoppingCart.cartItems[index];

        if (cartItem.quantity > 0) {
            const subtotalPrice = cartItem.subtotalPrice.toLocaleString([], {currency: 'BRL'});      
            message += `${cartItem.product.name}: R$ ${subtotalPrice} (${cartItem.quantity} unid.)\n`;
        }
    }

    const totalprice = shoppingCart.totalPrice.toLocaleString([], {currency: "BRL"});
    message += `*TOTAL: R$ ${totalprice}*\n`;

    return message;
  }

  private appendAddressToTheOrderMessage(orderMessage: string, address: Address): string {
      const addressText = 
          "\n*Endereço:*\n" +
          `Nome: ${address.name ?? ""}\n` +
          `Logradouro: ${address.street ?? ""}\n` +
          `Nº: ${address.houseNumber ?? ""}\n` +
          `Complemento: ${address.complement ?? ""}\n` +
          `Bairro: ${address.neighborhood ?? ""}`;
      
      return orderMessage.concat(addressText);
  }
}