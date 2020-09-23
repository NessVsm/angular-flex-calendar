import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddEvent,  DeleteOneEvent,  EditEvent, SelectedEvent } from '../../../store/actions/calendar.actions';
import { SaveWeather } from '../../../store/actions/weather.actions';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.scss']
})
export class ModalEventComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  public dateFormated:any;
  public isButtonDisabled: boolean;
  public formValue: any;
  public idSelected: any;

  constructor(
    private _store: Store<any>,
  ) { }


  ngOnInit() {
    this._store.select('form').subscribe(state => {
      this.isButtonDisabled = !state.isValid;

      if (state.isValid) {
        const form = {...state.value }
        this.formValue = form;
      }
    });
    if ( this.type === 'new') {
      this._store.dispatch(SelectedEvent({}));
    }
  }

  public delete() {
    if (this.formValue) {
      this._store.dispatch(DeleteOneEvent());
    }
  }

  public saveEvent() {
    if (this.formValue) {
      if ( this.type === 'edit') {
        const form = {...this.formValue, id: this.idSelected };
        this._store.dispatch(SelectedEvent(form));
        this._store.dispatch(EditEvent(form));
      } else {
        this.idSelected = Math.random();
        const form = {...this.formValue, id: this.idSelected };
        this._store.dispatch(AddEvent(form));
      }
      this.formValue = {};
      this._store.dispatch(SelectedEvent( this.formValue));
      this._store.dispatch(SaveWeather( {forecast: '', forecastImg: '', city: ''} ));
      (document.getElementById('formInsert') as HTMLFormElement).reset();
    }
  }

}