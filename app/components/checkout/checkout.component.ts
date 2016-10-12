import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent {
    cartTotal:any;
    total:any;
    constructor() {
        this.cartTotal = localStorage.getItem('cartTotal');
    }
}
