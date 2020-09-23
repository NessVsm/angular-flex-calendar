import { EventActionsEnum } from "../actions/event.actions";
import { ActionModel } from "../models/action.model";
import { initialEventState } from "../states/event.state";

export function eventReducer
  (state = initialEventState,
   action: ActionModel) {
     switch(action.type) { 
       case EventActionsEnum.NewEvent: 
       return {
         ...state
       }
       default:
       return state;
     }
  }