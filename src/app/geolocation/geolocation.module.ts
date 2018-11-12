import { LocatorComponent } from './../geolocation/locator/locator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGeolocation from './reducers/geolocation.reducer';

@NgModule({
  declarations: [
    LocatorComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('geolocation', fromGeolocation.reducer)
  ],
  exports: [LocatorComponent]
})
export class GeolocationModule { }
