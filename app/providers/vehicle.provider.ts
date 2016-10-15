import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Vehicle } from '../models/vehicles.model';

@Injectable()
export class VehicleProvider {
  constructor(public http: Http) { }
  carsUrl = "./app/json/carsList.json";
  
  // Load all vehicles
  load(): Observable<Vehicle[]> {
    return this.http.get(this.carsUrl)
        .map(res => <Vehicle[]>res.json());
  }

   // Search vehicles 
  searchUsers(searchParam: string): Observable<Vehicle[]> {
    return this.http.get(this.carsUrl) 
      .map(res => <Vehicle[]>(res.json().items))
  }
}
