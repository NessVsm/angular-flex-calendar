import { DATA } from '../../app/mockData/mockData';
import { CalendarActionsEnum } from '../actions/calendar.actions';
import { ActionModel } from '../models/action.model';
import { initialCalendarState } from '../states/calendar.state';

export function calendarReducer
  (state = initialCalendarState,
   action: ActionModel) {
     switch(action.type) {
       case CalendarActionsEnum.DecreaseMonth:
        return {
          ...state,
          month: state.month - 1,
          monthName: DATA.monthNames[state.month - 1],
          daysInMonth: new Date(DATA.year, (state.month -1) + 1, 0).getDate(),
          firstDay: new Date(DATA.year, (state.month-1), 1).getDay(),
          lastDay: new Date(DATA.year, (state.month-1) + 1, 0).getDay(), 
         }
       case CalendarActionsEnum.IncreaseMonth:
        return {
          ...state,
          month: state.month + 1,
          monthName: DATA.monthNames[state.month + 1],
          daysInMonth: new Date(DATA.year, (state.month +1) + 1, 0).getDate(),
          firstDay: new Date(DATA.year, (state.month+1), 1).getDay(),
          lastDay: new Date(DATA.year, (state.month+1) + 1, 0).getDay(), 
         }
       case CalendarActionsEnum.AddEvent:
        return {
          ...state,
          events: [...state.events, action.payload]
        }
        case CalendarActionsEnum.EditEvent: {
          const index = state.events.findIndex(evt => evt.id === action.payload.id),
          eventsArray = [...state.events] 
          eventsArray[index] = action.payload;
          return {
            ...state,
            events: eventsArray
          }
     
        }
        case CalendarActionsEnum.SelectedEvent :
        return {
          ...state,
          selectedEvent: action.payload
        }
       case CalendarActionsEnum.SelectedDay:
       return {
         ...state,
         selectedDay: action.payload
       } 
       case CalendarActionsEnum.DeleteEvents: 
       return {
        ...state,
        events: [...state.events.filter((event) => event.date !== action.payload)]
       }
       case CalendarActionsEnum.DeleteOneEvent:
       return {
         ...state,
         events: [...state.events.filter( (event) => event.id !== state.selectedEvent.id)]
       }
       default:
         return state;
     }
   }