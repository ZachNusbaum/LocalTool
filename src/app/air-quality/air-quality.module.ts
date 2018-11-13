import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAirQuality from './reducers/air-quality.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AirQualityEffects } from './effects/air-quality.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('airQuality', fromAirQuality.reducer),
    EffectsModule.forFeature([AirQualityEffects])
  ]
})
export class AirQualityModule { }
