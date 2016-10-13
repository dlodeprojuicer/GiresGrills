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
    ordersDB:any = JSON.parse(localStorage.getItem('ordersDB'));

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
            selectedItems: JSON.parse(localStorage.getItem('checkoutArray')),
            checkoutFormObject: this.checkoutFormObject,
            total: JSON.parse(localStorage.getItem('cartTotal'))
        }
        
        this.ordersDB.push(this.checkoutDB)
        // DB
        localStorage.setItem('ordersDB',JSON.stringify(this.ordersDB));
    }
}
