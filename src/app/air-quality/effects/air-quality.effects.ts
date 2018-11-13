import { ReceiveAirQuality } from './../actions/air-quality.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AirQualityActionTypes } from '../actions/air-quality.actions';
import { AirvisualService } from '../airvisual.service';

@Injectable()
export class AirQualityEffects {

  @Effect({dispatch: true})
  loadAirQuality$ = this.actions$.pipe(
    ofType(AirQualityActionTypes.LoadAirQuality),
    mergeMap((action: any) => {
      return this.air.get(action.latitude, action.longitude);
    }),
    map(
      (resp: any) => {
        console.log(resp);
        const current = resp.data.current;
        const data = resp.data;
        const payload = {
          loaded: true,
          city: data.city,
          state: data.state,
          country: data.country,
          ts: current.weather.ts,
          hu: current.weather.hu,
          ic: current.weather.ic,
          pr: current.weather.pr,
          tp: current.weather.tp,
          wd: current.weather.wd,
          ws: current.weather.ws,
          aqius: current.pollution.aqius,
          mainus: current.pollution.mainus
        };
        return new ReceiveAirQuality(payload);
      }
    )
  );

  constructor(private actions$: Actions, private air: AirvisualService) {}
}
