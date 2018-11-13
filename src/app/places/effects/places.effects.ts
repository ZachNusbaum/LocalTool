import { PlacesActions, ReverseGeocodeComplete } from './../actions/places.actions';
import { GeocodeService } from './../geocode.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PlacesActionTypes } from '../actions/places.actions';
import { mergeMap, map, tap } from 'rxjs/operators';

@Injectable()
export class PlacesEffects {

  @Effect({dispatch: true})
  reverseGeocode$ = this.actions$.pipe(
    ofType(PlacesActionTypes.ReverseGeocode),
    mergeMap((action: PlacesActions) => {
      return this.geocoder.reverseGeocode(action.latitude, action.longitude);
    }),
    map((response: any) => {
      const results = response.results;
      const state = {
        formatted_address: results[0].formatted_address,
        geometry: {
          location_type: results[0].geometry.location_type,
          viewport: results[0].geometry.viewport
        },
        loaded: true
      };
      console.log(state);
      return new ReverseGeocodeComplete(state);
    })
  );

  constructor(private actions$: Actions, private geocoder: GeocodeService) {}
}
