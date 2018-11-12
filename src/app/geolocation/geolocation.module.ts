import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGeolocation from './reducers/geolocation.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('geolocation', fromGeolocation.reducer)
  ]
})
export class GeolocationModule { }
