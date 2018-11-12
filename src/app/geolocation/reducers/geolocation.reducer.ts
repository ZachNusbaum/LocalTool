import { GeolocationActionTypes, GeolocationActions } from './../actions/geolocation.actions';
import { Action } from '@ngrx/store';


export interface State {
  loading: boolean;
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  timestamp: number;
}

export const initialState: State = {
  loading: false,
  latitude: null,
  longitude: null,
  accuracy: null,
  altitude: null,
  altitudeAccuracy: null,
  timestamp: null
};

export function reducer(state = initialState, action: GeolocationActions): State {
  switch (action.type) {
    case GeolocationActionTypes.FetchCoordinates:
      return {...state, loading: true};

    case GeolocationActionTypes.ReceiveCoordinates:
      return {...state, ...action.payload};

    case GeolocationActionTypes.ResetCoordinates:
      return initialState;

    default:
      return state;
  }
}
