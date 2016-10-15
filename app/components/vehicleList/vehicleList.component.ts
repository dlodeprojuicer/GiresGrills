import { Component } from '@angular/core';
import * as _ from 'lodash';

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
    searchFilter:any;

    constructor(private vehicleProvider: VehicleProvider) {
        vehicleProvider.load().subscribe(vehicles => {
            console.log(vehicles);
            this.vehicles = vehicles;
        })
    }

  search(searchEvent:any) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.vehicles = this.originalVehicles;
    } else {
        console.log(searchEvent.target.value,this.vehicles);
        this.searchFilter = _.filter(this.vehicles, _.iteratee({"make":searchEvent.target.value}));
        console.log(this.searchFilter);
      // Get the searched users from github
      this.vehicleProvider.searchUsers(term).subscribe(vehicles => {
        this.vehicles = vehicles
      });
    }
  }

}
