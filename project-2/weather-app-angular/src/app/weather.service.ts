import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '57e0b31962ae34800b8c4142095d57fa';

  constructor(private http: HttpClient) { }

  // ==> Método para retornar os params de 'latitude' e 'longitude' da api:
  getWeatherDataByCoords(lat, lon) {
    const params = new HttpParams()

      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }

  // ==> Método para retornar o nome da Cidade:
  getWeatherDataByCityName(city: string) {
    const params = new HttpParams()

      .set('q', city)
      .set('units', 'metrics')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
}
