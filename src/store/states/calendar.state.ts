import { DATA } from '../../app/mockData/mockData';
import { ICalendar } from '../models/calendar.model';

export const initialCalendarState: ICalendar  = {
  month: DATA.month,
  monthName: DATA.monthNames[DATA.month],
  firstDay: new Date(DATA.year, DATA.month, 1).getDay(),
  lastDay: new Date(DATA.year, DATA.month + 1, 0).getDay(), 
  daysInMonth: new Date(DATA.year, DATA.month + 1, 0).getDate(),
  selectedDay: 0,
  events: [],
  selectedEvent: {}
}