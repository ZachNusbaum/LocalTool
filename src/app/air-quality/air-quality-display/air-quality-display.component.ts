import { first, filter, skipWhile, mergeMap, map } from 'rxjs/operators';
import { ReceiveAirQuality, LoadAirQuality } from './../actions/air-quality.actions';
import { State } from './../../reducers/index';
import { Store } from '@ngrx/store';
import * as fromAirQuality from '../reducers/air-quality.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-air-quality-display',
  templateUrl: './air-quality-display.component.html',
  styleUrls: ['./air-quality-display.component.css']
})
export class AirQualityDisplayComponent implements OnInit, OnDestroy {
  airQual$ = this.store$.select('airQuality');
  geocode$ = this.store$.select('geolocation');
  subscription;

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.subscription = this.airQual$.pipe(
      // skipWhile((air: any) => air.loaded === true),
      mergeMap((air: any) => this.geocode$.pipe(
        skipWhile((geocode: any) => geocode.loaded === false),
        skipWhile(() => air.loaded === true),
        first()
        )
      ),
    ).subscribe((response: any) => {
      console.log(response);
      this.store$.dispatch(new LoadAirQuality(response.latitude, response.longitude));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
