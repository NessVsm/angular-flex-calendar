import { Component, OnInit,  VERSION } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public type: string;
  public title: string;

  constructor(
     private _store: Store<any>
  ) {}
  ngOnInit() {
     this._store.select('calendar').subscribe(calendarData => {
      this.type = Object.keys(calendarData.selectedEvent).length ? 'edit' : 'new'
      this.title = this.type === 'edit' ? 'Edit Event' : 'Add new Event';
    })
  }
}
