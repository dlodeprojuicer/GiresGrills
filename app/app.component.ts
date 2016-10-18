import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    _ordersArr:any = localStorage.getItem('ordersDB');
    
    constructor() {
        if (!this._ordersArr) {
            localStorage.setItem('ordersDB',JSON.stringify([]));
        }
    }
}
