import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hour-calendar',
  templateUrl: './hour-calendar.component.html',
  styleUrls: ['./hour-calendar.component.scss']
})
export class HourCalendarComponent implements OnInit {
  months: any[] = [
    { name: 'January', value: '1' }, { name: 'February', value: '2' },
    { name: 'March', value: '3' }, { name: 'April', value: '4' },
    { name: 'May', value: '5' }, { name: 'June', value: '6' },
    { name: 'July', value: '7' }, { name: 'August', value: '8' },
    { name: 'September', value: '9' }, { name: 'October', value: '10' },
    { name: 'November', value: '11' }, { name: 'December', value: '12' },
  ];
  years: any[] = [
    { name: '2021', value: '2021' }, { name: '2022', value: '2022' },
    { name: '2023', value: '2023' }, { name: '2024', value: '2024' },
  ];
  weeks: any[] = [
    { name: 'Mon', dayNumber: 1, meta: { date: '7', data: '20' } },
    { name: 'Tue', dayNumber: 2, meta: { date: '8', data: null } },
    { name: 'Wed', dayNumber: 3, meta: { date: '9', data: null } },
    { name: 'Thu', dayNumber: 4, meta: { date: '10', data: null } },
    { name: 'Fri', dayNumber: 5, meta: { date: '11', data: null } },
    { name: 'Sat', dayNumber: 6, meta: { date: '12', data: null } },
    { name: 'Sun', dayNumber: 0, meta: { date: '13', data: null } }];

  isCalendar: boolean = true;
  dayView: any[] = [
    {
      hour: '00:00',
      days: this.weeks
    },
    {
      hour: '01:00',
      days: this.weeks
    },
    {
      hour: '02:00',
      days: this.weeks
    },
    {
      hour: '03:00',
      days: this.weeks
    },
    {
      hour: '04:00',
      days: this.weeks
    },
    {
      hour: '05:00',
      days: this.weeks
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
