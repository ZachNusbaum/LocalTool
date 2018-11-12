import { Action } from '@ngrx/store';

export enum GeolocationActionTypes {
  FetchCoordinates = '[Geolocation] Fetch Coordinates',
  ReceiveCoordinates = '[Geolocation] Receive Coordinates',
  ResetCoordinates = '[Geolocation] Reset'
}

export class FetchCoordinates implements Action {
  readonly type = GeolocationActionTypes.FetchCoordinates;
}

export class ReceiveCoordinates implements Action {
  readonly type = GeolocationActionTypes.ReceiveCoordinates;
  constructor(public payload: {}) {}
}

export class ResetCoordinates implements Action {
  readonly type = GeolocationActionTypes.ResetCoordinates;
}

export type GeolocationActions = FetchCoordinates | ReceiveCoordinates | ResetCoordinates;
