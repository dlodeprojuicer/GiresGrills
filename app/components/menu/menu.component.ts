import { Component } from '@angular/core';
import { MenuItemsService } from '../../services/menuItems/menuItems.service';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html',
    providers: [MenuItemsService]
})
export class MenuComponent {

    constructor(private _menuItemsService:MenuItemsService) {
        console.log('GithubComponent init....');
    }

   breakfastItems = [
        {
            productName: 'Breakfast Item 1',
            productPrice: 23
        },
        {
            productName: 'Breakfast Item 2',
            productPrice: 342
        },
        {
            productName: 'Breakfast Item 3',
            productPrice: 42
        }
    ];

   lunchItems = [
        {
            productName: 'Lunch Item 1',
            productPrice: 23
        },
        {
            productName: 'Lunch Item 2',
            productPrice: 342
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
    ]
    
}

