import { IEvent } from "./event.model";

export interface ICalendar {
  month: number;
  monthName: string;
  daysInMonth: number;
  firstDay: number;
  lastDay: number;
  selectedDay: number;
  events: IEvent[];
  selectedEvent: any;
}