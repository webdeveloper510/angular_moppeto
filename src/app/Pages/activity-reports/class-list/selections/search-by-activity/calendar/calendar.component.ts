import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
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
    { name: 'Mon', dayNumber: 1 },
    { name: 'Tue', dayNumber: 2 },
    { name: 'Wed', dayNumber: 3 },
    { name: 'Thu', dayNumber: 4 },
    { name: 'Fri', dayNumber: 5 },
    { name: 'Sat', dayNumber: 6 },
    { name: 'Sun', dayNumber: 0 }];

  isCalendar: boolean = true;
  completearray: any[] = []
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 32; i++) {
      this.completearray.push(i)
    }
  }

}
