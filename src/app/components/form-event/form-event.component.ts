import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATA } from '../../mockData/mockData';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { WeatherApiService } from '../../services/weather-api-service';
import { setValidity } from '../../../store/actions/form.actions';
import { IEvent } from '../../../store/models/event.model';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit {
  public form: FormGroup;
  public timeArray;
  public colorArray;
  public colorNamesArray;
  public day: number;
  public month: string;
  public weatherForecast: string;
  public weatherForecastIcon: string;
  public weatherCity: string;
  public eventSelected: IEvent;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<any>,
    private _weatherApiService: WeatherApiService,
  ) { }

  ngOnInit() {
    this.setVariables();
    this.setForm();
  
    this.form.get('city').valueChanges.pipe(
      debounceTime(500))
      .subscribe(city => { 
        if (city) {
          this._weatherApiService.getWeather(city); 
        }
    });

    this._store.select('calendar').subscribe(calendarData => {
      if (Object.keys(calendarData.selectedEvent).length) { 
        this.eventSelected = calendarData.selectedEvent;
        this.form.patchValue(this.eventSelected);
      }
    })

    
    this.form.statusChanges
    .pipe(debounceTime(1000))
    .subscribe( (formStatus) => {
      const isValid = formStatus === 'VALID' ? true: false;
      const form = {...this.form.value, date: this.day };
      this._store.dispatch(setValidity({isValid, form}));
    })
  }

  public setVariables() {
    this.timeArray = DATA.timeNumbers;
    this.colorArray = DATA.colorCodes;
    this.colorNamesArray = DATA.colorNames;

    this._store.select('calendar').subscribe(state => {
      this.day = state.selectedDay;
      this.month = state.monthName;
    });    
    this._store.select('weather').subscribe(state => {
     this.weatherForecast = state.forecast;
     this.weatherForecastIcon = state.forecastImg;
     this.weatherCity = state.city;
    });
  }

  public setForm() {
    this.form = this._fb.group({
      startTime: [ null, Validators.required],
      finishTime: [ null, Validators.required],    
      color: [ null, Validators.required],
      title: [ null, Validators.required],
      city: [ null, Validators.required]
    });
    this.form.get('color').setValue(this.colorArray[0]);
  }
}