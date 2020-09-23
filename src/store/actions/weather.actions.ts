import { Action } from '@ngrx/store';

export enum WeatherActionsEnum {
  SaveWeather = '[WEATHER] Save Weather',
  SaveWeatherImg = '[WEATHER IMG SAVE] Save image'
}

export const SaveWeather = (event: any) => {
  return <Action>{ type: WeatherActionsEnum.SaveWeather, payload: event }
}

export const SaveWeatherImg = (event: any) => {
  return <Action>{ type: WeatherActionsEnum.SaveWeatherImg, payload: event }
}