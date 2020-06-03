import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartComponent } from './catalog/shopping-cart/shopping-cart.component';
import { AddressPanelComponent } from './catalog/address-panel/address-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ShoppingCartComponent,
    AddressPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }