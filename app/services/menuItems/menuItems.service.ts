import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuItemsService{
    constructor() {
        console.log("MenuItemsService init");
    }

    itemsList(){
         return [
            'Breakfast Item 1',
            'Breakfast Item 1',
            'Breakfast Item 1',
            'Breakfast Item 1',
            'Breakfast Item 1',
            'Breakfast Item 1',
            'Breakfast Item 1',
        ]
    }
}