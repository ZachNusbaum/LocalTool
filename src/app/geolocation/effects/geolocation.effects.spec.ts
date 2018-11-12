import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GeolocationEffects } from './geolocation.effects';

describe('GeolocationEffects', () => {
  let actions$: Observable<any>;
  let effects: GeolocationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GeolocationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GeolocationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
