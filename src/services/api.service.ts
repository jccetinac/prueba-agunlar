import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import cities from '../const/cities';
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '4a6cf139b1b672cd4c65653fe8da4abe';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(cityId): Observable<any> {
    const selectedCity = cities.find((city) => city.id === parseInt(cityId));
    return this.http
      .get(
        `${API_URL}?lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=${API_KEY}`
      )
      .pipe(map((res) => res));
  }
}
// /api/users
