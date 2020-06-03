import { Component, OnInit } from '@angular/core';

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-address-panel',
  templateUrl: './address-panel.component.html',
  styleUrls: ['./address-panel.component.css']
})

export class AddressPanelComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  constructor() { }

  ngOnInit(): void { }

  closeAddressPanel() {
    const addressPanel = document.getElementById('address-panel');
    addressPanel.style.display = 'none';
  }
}