import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocodeResultsComponent } from './geolocation/geocode-results/geocode-results.component';

const routes: Routes = [
  { path: '**', component: GeocodeResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
