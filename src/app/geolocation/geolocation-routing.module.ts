import { GeocodeResultsComponent } from './geocode-results/geocode-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'geocode',
    children: [
      {path: 'state', component: GeocodeResultsComponent}
    ]
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
export class GeolocationRoutingModule {
}
