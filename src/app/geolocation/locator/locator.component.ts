import { GeoLocationService } from './../geolocation.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGeolocation from '../reducers/geolocation.reducer';
import { FetchCoordinates, ResetCoordinates } from '../actions/geolocation.actions';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {
  state$ = this.store.select('geolocation');

  constructor(private store: Store<fromGeolocation.State>) { }

  ngOnInit() {
  }

  getCoords() {
    this.store.dispatch(new FetchCoordinates());
  }

  reset() {
    this.store.dispatch(new ResetCoordinates());
  }
}
