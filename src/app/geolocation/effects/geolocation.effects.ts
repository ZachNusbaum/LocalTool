import { GeoLocationService } from './../geolocation.service';
import { GeolocationActionTypes, GeolocationActions, ReceiveCoordinates } from './../actions/geolocation.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import * as fromGeolocation from '../reducers/geolocation.reducer';


@Injectable()
export class GeolocationEffects {

  @Effect({dispatch: true})
  fetchCoords$ = this.actions$.pipe(
    ofType(GeolocationActionTypes.FetchCoordinates),
    mergeMap((action: GeolocationActionTypes.FetchCoordinates) => {
      return this.geolocate.getLocation();
    }),
    map((location: any) => {
      console.log(location);
      let coords = location.coords;
      return {
        type: GeolocationActionTypes.ReceiveCoordinates,
        payload: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          accuracy: coords.accuracy,
          altitude: coords.altitude,
          altitudeAccuracy: coords.altitudeAccuracy,
          timestamp: location.timestamp,
          loading: false
        }
      };
    })
  );

  constructor(private actions$: Actions, private geolocate: GeoLocationService) {}
}
