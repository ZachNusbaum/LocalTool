import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AirQualityActionTypes } from '../actions/air-quality.actions';

@Injectable()
export class AirQualityEffects {

  @Effect()
  loadAirQualitys$ = this.actions$.pipe(ofType(AirQualityActionTypes.LoadAirQualitys));

  constructor(private actions$: Actions) {}
}
