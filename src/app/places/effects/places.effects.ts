import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PlacesActionTypes } from '../actions/places.actions';

@Injectable()
export class PlacesEffects {

  @Effect()
  loadPlacess$ = this.actions$.pipe(ofType(PlacesActionTypes.LoadPlacess));

  constructor(private actions$: Actions) {}
}
