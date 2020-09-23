import { Action } from '@ngrx/store';

export enum FormActionsEnum {
  setValidity = '[FORM] Set Validity',
}

export const setValidity = (event: any) => {
  return <Action>{ type: FormActionsEnum.setValidity, payload: event }
}
