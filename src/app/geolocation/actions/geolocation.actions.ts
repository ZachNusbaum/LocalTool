import { Action } from '@ngrx/store';

export enum GeolocationActionTypes {
  FetchCoordinates = '[Geolocation] Fetch Coordinates',
  ReceiveCoordinates = '[Geolocation] Receive Coordinates'
}

export class FetchCoordinates implements Action {
  readonly type = GeolocationActionTypes.FetchCoordinates;
}

export class ReceiveCoordinates implements Action {
  readonly type = GeolocationActionTypes.ReceiveCoordinates;
  constructor(public payload: {}) {}
}

export type GeolocationActions = FetchCoordinates | ReceiveCoordinates;
