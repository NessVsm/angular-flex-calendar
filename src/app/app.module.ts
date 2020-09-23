import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { calendarReducer } from '../store/reducers/calendar.reducers';
import { CardComponent } from './components/card/card.component';
import { EventCardComponent } from './components/card/event-card/event-card.component';
import { ModalEventComponent } from './components/modal-event/modal-event.component';
import { FormEventComponent } from './components/form-event/form-event.component';
import { WeatherApiService } from './services/weather-api-service';
import { weatherReducer } from '../store/reducers/weather.reducers';
import { formReducer } from '../store/reducers/form.reducers';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
     StoreModule.forRoot({
      calendar: calendarReducer,
      weather: weatherReducer,
      form: formReducer

     }) ],
  declarations: [ AppComponent, HelloComponent, CalendarComponent, CardComponent, EventCardComponent, ModalEventComponent, FormEventComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherApiService]
})
export class AppModule { }
