import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_uri = 'https://sandbox.zncodes.com/api/air.php';

@Injectable({
  providedIn: 'root'
})
export class AirvisualService {

  constructor(private http: HttpClient) { }

  get(latitude: number, longitude: number) {
    return this.http.get(`${base_uri}?lat=${latitude}&lng=${longitude}`);
  }
}
