import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlacesEffects } from './places.effects';

describe('PlacesEffects', () => {
  let actions$: Observable<any>;
  let effects: PlacesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlacesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PlacesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
