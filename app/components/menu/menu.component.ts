import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent {    
   breakfastItems = [
        {
            productName: 'Breakfast Item 1',
            productPrice: 3
        },
        {
            productName: 'Breakfast Item 2',
            productPrice: 2
        },
        {
            productName: 'Breakfast Item 3',
            productPrice: 2
        }
    ];

   lunchItems = [
        {
            productName: 'Lunch Item 1',
            productPrice: 3
        },
        {
            productName: 'Lunch Item 2',
            productPrice: 2
        }
    ];

   dinnerItems = [
        {
            productName: 'Dinner Item 1',
            productPrice: 23
        },
        {
            productName: 'Dinner Item 2',
            productPrice: 342
        }
    ];
    
    cartTotal:any = 0;
    checkoutArray:any = [];
    ab:boolean = false;
    _checked:any = ""; 
    addToCartFn(item:any) {
        this.ab = !this.ab;
        if (this.ab) {
            this._checked = "text-warning";
        } else {
            this._checked = "";
        };

        this.cartTotal = this.cartTotal + item.productPrice;
        localStorage.setItem('cartTotal', this.cartTotal);
        this.checkoutArray.push(item);
        localStorage.setItem('checkoutArray',JSON.stringify(this.checkoutArray));
    };
}
