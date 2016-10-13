import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    ordersArr:any = [];
    ordersDB:any = localStorage.setItem('ordersDB',JSON.stringify(this.ordersArr));
}
