import { Action } from '@ngrx/store';

export enum EventActionsEnum {
  NewEvent = '[EVENT] New event',
}

export const NewEvent = (event: any) => {
  return <Action>{ type: EventActionsEnum.NewEvent, payload: event}
}