import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AirQualityEffects } from './air-quality.effects';

describe('AirQualityEffects', () => {
  let actions$: Observable<any>;
  let effects: AirQualityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AirQualityEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AirQualityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
