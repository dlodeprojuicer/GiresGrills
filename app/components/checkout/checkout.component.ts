import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent {
    cartTotal:any;
    total:any;
    name:string;
    email:string;
    cell:string;
    checkoutFormObject:any;

    constructor() {
        this.cartTotal = localStorage.getItem('cartTotal');
    }

    submitFn() {
        this.checkoutFormObject = {
            name: this.name,
            email: this.email,
            cell: this.cell
        };
        console.log(this.checkoutFormObject);
        localStorage.setItem('checkoutFormObject',this.checkoutFormObject);
    }
}
