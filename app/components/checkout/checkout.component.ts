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
    checkoutDB:any;

    constructor() {
        this.cartTotal = localStorage.getItem('cartTotal');
    }

    submitFn() {
        this.checkoutFormObject = {
            name: this.name,
            email: this.email,
            cell: this.cell
        };
        
        this.checkoutDB = {
            selectedItems: localStorage.getItem('checkoutArray'),
            checkoutFormObject: this.checkoutFormObject,
            total: localStorage.getItem('cartTotal')
        }

        // DB
        localStorage.setItem('checkoutDB',this.checkoutDB);

        console.log(this.checkoutDB);
    }
}
