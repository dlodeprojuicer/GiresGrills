import { Component } from '@angular/core';
import { MenuItemsService } from '../../services/menuItems/menuItems.service';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html',
    providers: [MenuItemsService]
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

    total = 0;

    addToCartFn(price:number) {
        this.total = this.total + price;
        localStorage.setItem('cartTotal', "'"+this.total+"'" );
        console.log(this.total);
    };
    
}

