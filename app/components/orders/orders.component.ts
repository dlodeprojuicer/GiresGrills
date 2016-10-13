import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'orders',
    templateUrl: 'orders.component.html'
})
export class OrdersComponent {
    ordersDB:any = JSON.parse(localStorage.getItem('ordersDB'));
}