import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGeolocation from '../reducers/geolocation.reducer';

@Component({
  selector: 'app-geocode-results',
  templateUrl: './geocode-results.component.html',
  styleUrls: ['./geocode-results.component.css']
})
export class GeocodeResultsComponent implements OnInit {
  state$ = this.store.select('geolocation');

  constructor(private store: Store<fromGeolocation.State>) { }

  ngOnInit() {
  }

}
