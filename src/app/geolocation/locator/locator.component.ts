import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGeolocation from '../reducers/geolocation.reducer';
import { FetchCoordinates } from '../actions/geolocation.actions';
@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {

  constructor(private store: Store<fromGeolocation.State>) { }

  ngOnInit() {
    this.store.dispatch(new FetchCoordinates());
  }

}
