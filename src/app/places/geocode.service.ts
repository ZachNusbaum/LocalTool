import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base_uri = 'https://sandbox.zncodes.com/api/geocode.php';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  constructor(private http: HttpClient) { }

  public reverseGeocode(latitude: number, longitude: number) {
    return this.http.get(`${base_uri}?lat=${latitude}&lng=${longitude}`);
  }
}
