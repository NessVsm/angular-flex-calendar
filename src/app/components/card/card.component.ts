import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteEvents, SelectedDay } from '../../../store/actions/calendar.actions';
import { IEvent } from '../../../store/models/event.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() day: number;
  @Input() week: number;
  public totalWeeks: number = 0;
  public firstDay: number;
  public lastDay: number;
  public month: string;
  public numberOfDaysMonth: number;
  public dayNumber: number;
  public events: IEvent[];

  constructor(
   private _store: Store<any>,
  ) { }

  ngOnInit() {
    this.setVariables();
  }

  public calculateDayNumber(firstDay, numberOfDaysMonth) {
    const partialNumber = this.week*7 + this.day;
    this.totalWeeks = firstDay >= 4 && numberOfDaysMonth > 29 ? 5 : 4;

    if (
      (partialNumber < numberOfDaysMonth + firstDay) &&
      (partialNumber >= firstDay)
    ){
      this.dayNumber = partialNumber - firstDay + 1;
    }
  }
  
  public setVariables() {
    this._store.select('calendar').subscribe(calendarData => {
      this.dayNumber = 0;
      this.month = calendarData.monthName;
      this.firstDay = calendarData.firstDay;
      this.lastDay = calendarData.lastDay;
      this.numberOfDaysMonth = calendarData.daysInMonth;
      this.calculateDayNumber(this.firstDay, this.numberOfDaysMonth);
      this.getEvents(calendarData.events, this.dayNumber);
    })
  }

  public getEvents(events: IEvent[], dayNumber: number) {
    this.events = events.filter(evt => evt.date === dayNumber).sort();
  }
  public changeDay(dateSelected: number){
    this._store.dispatch(SelectedDay(dateSelected));
  }
  public deleteEvents() {
    this._store.dispatch(DeleteEvents(this.dayNumber));
  }
}