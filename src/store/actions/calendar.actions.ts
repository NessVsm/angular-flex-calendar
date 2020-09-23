import { Action } from '@ngrx/store';

export enum CalendarActionsEnum {
  DecreaseMonth = '[CALENDAR] Decrease Month',
  IncreaseMonth = '[CALENDAR] Increase Month',
  SelectedDay = '[CALENDAR] Selected Day',
  SelectedEvent = '[CALENDAR] Selected Event',
  AddEvent = '[CALENDAR] Add Event',
  EditEvent = '[CALENDAR] Edit Event',
  DeleteEvents = '[CALENDAR] Delete Events',
  DeleteOneEvent = '[CALENDAR] Delete one Event'
}

export const DecreaseMonth = () => {
  return <Action>{ type: CalendarActionsEnum.DecreaseMonth }
}
export const IncreaseMonth = () => {
  return <Action>{ type: CalendarActionsEnum.IncreaseMonth }
}
export const SelectedDay = (event: any) => {
  return <Action>{ type: CalendarActionsEnum.SelectedDay, payload: event }
}
export const AddEvent = (event: any) => {
  return <Action>{ type: CalendarActionsEnum.AddEvent, payload: event }
}
export const SelectedEvent = (event: any) => {
  return <Action>{ type: CalendarActionsEnum.SelectedEvent, payload: event}
}
export const EditEvent = (event: any) => {
  return <Action>{ type: CalendarActionsEnum.EditEvent, payload: event}
}
export const DeleteEvents = (event: any) => {
  return <Action>{ type: CalendarActionsEnum.DeleteEvents, payload: event}
}
export const DeleteOneEvent = () => {
  return <Action>{ type: CalendarActionsEnum.DeleteOneEvent}
}