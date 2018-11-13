import { Action } from '@ngrx/store';

export enum PlacesActionTypes {
  ReverseGeocode = '[Place] Reverse Geocode',
  ReverseGeocodeComplete = '[Place] Reverse Geocode Complete'
}

export class ReverseGeocode implements Action {
  readonly type = PlacesActionTypes.ReverseGeocode;
  constructor(public latitude: number, public longitude: number) {}
}

export class ReverseGeocodeComplete implements Action {
  readonly type = PlacesActionTypes.ReverseGeocodeComplete;
  constructor(public payload: {}) {}
}

export type PlacesActions = ReverseGeocode | ReverseGeocodeComplete;
