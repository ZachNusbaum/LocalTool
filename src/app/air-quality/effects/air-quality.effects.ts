import { mergeMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AirQualityActionTypes } from '../actions/air-quality.actions';
import { AirvisualService } from '../airvisual.service';

@Injectable()
export class AirQualityEffects {

  @Effect({dispatch: false})
  loadAirQuality$ = this.actions$.pipe(
    ofType(AirQualityActionTypes.LoadAirQuality),
    mergeMap((action: any) => {
      return this.air.get(action.latitude, action.longitude);
    },
    tap((response: any) => console.log(response))
  )
  );

  constructor(private actions$: Actions, private air: AirvisualService) {}
}
