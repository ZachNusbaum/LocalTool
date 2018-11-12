import { GeolocationRoutingModule } from './geolocation-routing.module';
import { LocatorComponent } from './../geolocation/locator/locator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGeolocation from './reducers/geolocation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GeolocationEffects } from './effects/geolocation.effects';
import { GeocodeResultsComponent } from './geocode-results/geocode-results.component';

@NgModule({
  declarations: [
    LocatorComponent,
    GeocodeResultsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('geolocation', fromGeolocation.reducer),
    EffectsModule.forFeature([GeolocationEffects]),
    GeolocationRoutingModule
  ],
  exports: [LocatorComponent]
})
export class GeolocationModule { }
