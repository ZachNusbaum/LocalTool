import { Action } from '@ngrx/store';
import { PlacesActions, PlacesActionTypes } from '../actions/places.actions';

export interface Geometry {
  viewport: {};
  location_type: string;
}

export interface State {
  formatted_address: string;
  geometry: Geometry;
  loaded: boolean;
}

export const initialState: State = {
  formatted_address: null,
  geometry: {viewport: null, location_type: null},
  loaded: false
};

export function reducer(state = initialState, action: PlacesActions): State {
  switch (action.type) {

    case PlacesActionTypes.ReverseGeocode:
      return state;

    case PlacesActionTypes.ReverseGeocodeComplete:
      return {...state, ...action.payload}


    default:
      return state;
  }
}
