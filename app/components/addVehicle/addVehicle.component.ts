import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'addVehicle',
    templateUrl: 'addVehicle.component.html'
})
export class AddVehicleComponent {
    cartTotal:any;
    total:any;
    name:string;
    email:string;
    cell:string;

    constructor() {}
}
