import { WeatherActionsEnum } from "../actions/weather.actions";
import { ActionModel } from "../models/action.model";
import { initialWeatherState } from "../states/weather.state";

export function weatherReducer
  (state = initialWeatherState,
   action: ActionModel) {
     switch(action.type) {
       case WeatherActionsEnum.SaveWeather:
       return {
        ...state,
        forecast: action.payload.forecast,
        forecastImg: action.payload.forecastImg,
        city: action.payload.city
       }
       default:
        return state;
     }
   }