import { Action } from '@ngrx/store';


export interface State {
  latitude: number;
  longitude: number;

}

export const initialState: State = {
  latitude: null,
  longitude: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
