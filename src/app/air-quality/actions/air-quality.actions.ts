import { Action } from '@ngrx/store';

export enum AirQualityActionTypes {
  LoadAirQualitys = '[AirQuality] Load AirQualitys'
}

export class LoadAirQualitys implements Action {
  readonly type = AirQualityActionTypes.LoadAirQualitys;
}

export type AirQualityActions = LoadAirQualitys;
