import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { SaveWeather } from '../../store/actions/weather.actions';

@Injectable()
export class WeatherApiService {

  constructor(
    private http: Http,
      private _store: Store<any>
) { }

 public weatherIconURL = 'https://openweathermap.org/img/w/';
 public weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
 public weatherParams = '&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534';

  public getWeather(city: string) {
   this.http.get(`${this.weatherAPI}${city}${this.weatherParams}`)
   .subscribe(res => {
     const forecast = res.json().weather[0].description;
     const forecastImg = res.json().weather[0].icon;
     const city = res.json().name;
     this.changeWeather(forecast, `${this.weatherIconURL}${forecastImg}.png`, city);
   })
  }
  
  public changeWeather(forecastName: string, imgUrl: string, name: string) {
    const obj = { forecast: forecastName, forecastImg: imgUrl, city: name }
    this._store.dispatch(SaveWeather(obj));
  }

}