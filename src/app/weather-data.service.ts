import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  apiKey='931dde6900e5b3d67fef84beb1b93180';
  url:string  ;
  constructor(private http:HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city) {
    return this.http.get(this.url+city+'&units=metric&APPID='+this.apiKey);
  }
}
