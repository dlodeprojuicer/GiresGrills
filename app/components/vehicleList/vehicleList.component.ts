import { Component } from '@angular/core';

import { Vehicle } from '../../models/vehicles.model';
import { VehicleProvider } from '../../providers/vehicle.provider';

@Component({
    moduleId: module.id,
    selector: 'vehicleList',
    templateUrl: 'vehicleList.component.html'
})
export class VehicleListComponent {
    vehicles: Vehicle[];
    originalVehicles: Vehicle[];

    constructor(private vehicleProvider: VehicleProvider) {
        vehicleProvider.load().subscribe(vehicles => {
        this.vehicles = vehicles;
        console.log(vehicles)
        })
    }

  search(searchEvent:any) {
      console.log(searchEvent);
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.vehicles = this.originalVehicles;
    } else {
      // Get the searched users from github
      this.vehicleProvider.searchUsers(term).subscribe(vehicles => {
        this.vehicles = vehicles
      });
    }
  }

}
