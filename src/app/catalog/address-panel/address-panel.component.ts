import { Component, OnInit } from '@angular/core';

import { Address } from '../../models/address';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { WhatsappOrderLinkService } from '../../services/whatsapp-order-link.service';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-address-panel',
  templateUrl: './address-panel.component.html',
  styleUrls: ['./address-panel.component.css']
})

export class AddressPanelComponent implements OnInit {
  address: Address = new Address();
  faTimesCircle = faTimesCircle;
  faWhatsapp = faWhatsapp;

  constructor(
    private shoppingCartService: ShoppingCartService, 
    private whatsappOrderLinkService: WhatsappOrderLinkService
  ) { }

  ngOnInit(): void { }

  setAddress() {
    this.address.name = (document.getElementById('address-name') as HTMLInputElement).value;
    this.address.street = (document.getElementById('address-street') as HTMLInputElement).value;
    this.address.houseNumber = (document.getElementById('address-houseNumber') as HTMLInputElement).value;
    this.address.complement =  (document.getElementById('address-complement') as HTMLInputElement).value;
    this.address.neighborhood = (document.getElementById('address-neighborhood') as HTMLInputElement).value;
  }

  sendOrderByWhatsApp() {
    this.shoppingCartService.getShoppingCart()
      .subscribe(shoppingCart => {
        const link = 
          this.whatsappOrderLinkService.generateOrderLinkForWhatsApp(shoppingCart, this.address);
        window.open(link,"_self");
      });
  }

  closeAddressPanel() {
    const addressPanel = document.getElementById('address-panel');
    addressPanel.style.display = 'none';
  }
}