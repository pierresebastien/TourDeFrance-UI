import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Restangular } from 'ng2-restangular';

import { Drink } from '../models/drink';

@Injectable()
export class DrinkService {

  private baseApiRoute: string;

  constructor(private restangular: Restangular) {
    this.baseApiRoute = 'drinks';
  }

  public getDrinks(): Observable<Drink[]> {
    return this.restangular.all(this.baseApiRoute).getList();
  }

  public getDrinkById(id: string): Observable<Drink> {
    return this.restangular.one(this.baseApiRoute, id).get();
  }

  // TODO: review create, update and delete
  public createDrink(name: string, volume: number, alcoholByVolume: number, subDrinks: any): Observable<Drink> {
    const request = { Name: name, Volume: volume, AlcoholByVolume: alcoholByVolume, SubDrinkDefinitions: subDrinks };
    return this.restangular.all(this.baseApiRoute).customPOST(request);
  }

  public updateDrink(id: string, name: string, volume: number, alcoholByVolume: number, subDrinks: any): Observable<Drink> {
    const request = { Name: name, Volume: volume, AlcoholByVolume: alcoholByVolume, SubDrinkDefinitions: subDrinks };
    return this.restangular.one(this.baseApiRoute, id).customPUT(request);
  }

  public deleteDrink(id: string): Observable<Drink> {
    return this.restangular.all(this.baseApiRoute).customDELETE(id);
  }
}
