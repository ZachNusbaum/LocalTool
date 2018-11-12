import { LocatorComponent } from './../geolocation/locator/locator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGeolocation from './reducers/geolocation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GeolocationEffects } from './effects/geolocation.effects';

@NgModule({
  declarations: [
    LocatorComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('geolocation', fromGeolocation.reducer),
    EffectsModule.forFeature([GeolocationEffects])
  ],
  exports: [LocatorComponent]
})
export class GeolocationModule { }
