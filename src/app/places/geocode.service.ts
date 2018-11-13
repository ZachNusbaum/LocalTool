import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base_uri = 'https://maps.googleapis.com/maps/api/geocode/json';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private http: HttpClient) { }

  reverseGeocode(latitude: number, longitude: number) {
    return this.http.get(`${base_uri}?latlng=${latitude},${longitude}&key=${environment.geocode_key}`);
  }
}
