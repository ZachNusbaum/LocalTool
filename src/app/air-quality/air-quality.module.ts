import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAirQuality from './reducers/air-quality.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AirQualityEffects } from './effects/air-quality.effects';
import { AirQualityDisplayComponent } from './air-quality-display/air-quality-display.component';
import { AirQualityRoutingModule } from './air-quality-routing.module';

@NgModule({
  declarations: [AirQualityDisplayComponent],
  imports: [
    CommonModule,
    AirQualityRoutingModule,
    StoreModule.forFeature('airQuality', fromAirQuality.reducer),
    EffectsModule.forFeature([AirQualityEffects])
  ],
})
export class AirQualityModule { }
