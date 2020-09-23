import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../../../store/models/event.model';
import { Store } from '@ngrx/store';
import { SelectedEvent } from '../../../../store/actions/calendar.actions';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() events: IEvent[];

  constructor(
    private _store: Store<any>,
  ) { }

  ngOnInit() {
  }

  public openEvent(evt: IEvent) {
   this._store.dispatch(SelectedEvent(evt));
  }
}