import { AirQualityDisplayComponent } from './air-quality-display/air-quality-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'air_quality',
    component: AirQualityDisplayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AirQualityRoutingModule {
}
