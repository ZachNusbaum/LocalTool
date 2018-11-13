import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGeolocation from '../reducers/geolocation.reducer';
import { ResetCoordinates } from '../actions/geolocation.actions';

@Component({
  selector: 'app-geocode-results',
  templateUrl: './geocode-results.component.html',
  styleUrls: ['./geocode-results.component.css']
})
export class GeocodeResultsComponent implements OnInit {
  state$ = this.store.select('geolocation');
  placesState$ = this.store.select('places');

  constructor(private store: Store<fromGeolocation.State>) { }

  ngOnInit() {
  }

  reset() {
    this.store.dispatch(new ResetCoordinates());
  }

}
