import { Action } from '@ngrx/store';

export enum AirQualityActionTypes {
  LoadAirQuality = '[Air Quality] Load Air Quality',
  ReceiveAirQuality = '[Air Quality] Receive'
}

export class LoadAirQuality implements Action {
  readonly type = AirQualityActionTypes.LoadAirQuality;
  constructor(public latitude: number, public longitude: number) {}
}

export class ReceiveAirQuality implements Action {
  readonly type = AirQualityActionTypes.ReceiveAirQuality;
  constructor(public payload: {}) {}
}

export type AirQualityActions = LoadAirQuality | ReceiveAirQuality;
