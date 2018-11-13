import { Action } from '@ngrx/store';
import { AirQualityActions, AirQualityActionTypes } from '../actions/air-quality.actions';

export interface State {
  loaded: boolean;
  city: string;
  state: string;
  country: string;
  ts: string;
  hu: number;
  ic: string;
  pr: number;
  tp: number;
  wd: number;
  ws: number;
  aqius: number;
  mainus: string;
}

export const initialState: State = {
  loaded: false,
  city: null,
  state: null,
  country: null,
  ts: null,
  hu: null,
  ic: null,
  pr: null,
  tp: null,
  wd: null,
  ws: null,
  aqius: null,
  mainus: null
};

export function reducer(state = initialState, action: AirQualityActions): State {
  switch (action.type) {

    case AirQualityActionTypes.LoadAirQuality:
      return state;

    case AirQualityActionTypes.ReceiveAirQuality:
      return Object.assign({}, state, action.payload);


    default:
      return state;
  }
}
