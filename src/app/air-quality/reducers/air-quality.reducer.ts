import { Action } from '@ngrx/store';
import { AirQualityActions, AirQualityActionTypes } from '../actions/air-quality.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: AirQualityActions): State {
  switch (action.type) {

    case AirQualityActionTypes.LoadAirQualitys:
      return state;


    default:
      return state;
  }
}
