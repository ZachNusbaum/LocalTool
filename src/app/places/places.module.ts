import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPlaces from './reducers/places.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlacesEffects } from './effects/places.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('places', fromPlaces.reducer),
    EffectsModule.forFeature([PlacesEffects])
  ]
})
export class PlacesModule { }
