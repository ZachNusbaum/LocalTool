import { GeolocationActionTypes, GeolocationActions } from './../actions/geolocation.actions';
import { Action } from '@ngrx/store';


export interface State {
  loading: boolean;
  latitude: number;
  longitude: number;

}

export const initialState: State = {
  loading: false,
  latitude: null,
  longitude: null
};

export function reducer(state = initialState, action: GeolocationActions): State {
  switch (action.type) {
    case GeolocationActionTypes.FetchCoordinates:
      return {...state, loading: true};

    case GeolocationActionTypes.ReceiveCoordinates:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}
