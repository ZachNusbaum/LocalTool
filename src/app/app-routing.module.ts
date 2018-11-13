import { AirQualityDisplayComponent } from './air-quality/air-quality-display/air-quality-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocodeResultsComponent } from './geolocation/geocode-results/geocode-results.component';
import { HomepageComponent } from './core/homepage/homepage.component';

const routes: Routes = [
  { path: 'air_quality', component: AirQualityDisplayComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
