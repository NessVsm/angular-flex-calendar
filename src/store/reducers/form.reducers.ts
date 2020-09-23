import { FormActionsEnum } from '../actions/form.actions';
import { ActionModel } from '../models/action.model';
import { InitialFormState } from '../states/form.state';

export function formReducer
  (state = InitialFormState,
   action: ActionModel) {
     switch(action.type) {
       case FormActionsEnum.setValidity:
       return {
         ...state,
         isValid: action.payload.isValid,
         value: action.payload.form
       }
       default:
       return state;
     }
  }