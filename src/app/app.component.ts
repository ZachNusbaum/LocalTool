import { State } from './reducers/index';
import { FetchCoordinates } from './geolocation/actions/geolocation.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, first, delay } from 'rxjs/operators';
import * as fromGeolocation from './geolocation/reducers/geolocation.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  geolocation$ = this.store$.select('geolocation');
  private unsubscribe: Subject<void> = new Subject();

  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.store$.dispatch(new FetchCoordinates());
  }

  ngOnDestroy() {

  }
}
