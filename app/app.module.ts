import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './components/home/home.component';
import { MenuComponent }  from './components/menu/menu.component';
import { OrdersComponent }  from './components/orders/orders.component';
import { AccountComponent }  from './components/account/account.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  imports: [ HttpModule, BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, HomeComponent , MenuComponent, OrdersComponent, AccountComponent, CheckoutComponent],
  bootstrap: [ AppComponent ],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule {}
