import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecreaseMonth, IncreaseMonth } from '../../../store/actions/calendar.actions';
import { DATA } from '../../mockData/mockData';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public month: string;
  public weekDay: Array<string>;
  public firstDay: any;
  public lastDay: any;
  public numberOfDays: number;

  constructor(
    private _store: Store<any>,
  ) { }

  ngOnInit() {
    this.setVariables();
  }

  public setVariables() {
    this._store.select('calendar').subscribe(calendarData => {
      this.month = calendarData.monthName;
      this.firstDay = calendarData.firstDay;
      this.lastDay = calendarData.lastDay;
      this.numberOfDays = calendarData.daysInMonth;
      this.weekDay = DATA.weekDayNames;
    })
  }
  public decreaseMonth(){
    this._store.dispatch(DecreaseMonth());
  }
  public increaseMonth(){
    this._store.dispatch(IncreaseMonth());
  }
 }