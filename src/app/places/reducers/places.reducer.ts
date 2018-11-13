import { Action } from '@ngrx/store';
import { PlacesActions, PlacesActionTypes } from '../actions/places.actions';

export interface Geometry {
  viewport: {};
  location_type: string;
}

export interface State {
  formatted_address: string;
  geometry: Geometry;

}

export const initialState: State = {
  formatted_address: null,
  geometry: {viewport: null, location_type: null}
};

export function reducer(state = initialState, action: PlacesActions): State {
  switch (action.type) {

    case PlacesActionTypes.LoadPlacess:
      return state;


    default:
      return state;
  }
}
