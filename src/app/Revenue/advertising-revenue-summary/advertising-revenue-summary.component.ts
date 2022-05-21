import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

interface City2 {
  name: string,
  code: string
}

@Component({
  selector: 'app-advertising-revenue-summary',
  templateUrl: './advertising-revenue-summary.component.html',
  styleUrls: ['./advertising-revenue-summary.component.scss']
})
export class AdvertisingRevenueSummaryComponent implements OnInit {
  selected: Date;
  dateRange: string;
  revenueRange: string;

  cities: City[];
  selectedCity: City;

  cities2: City[];
  selectedCity2: City;

  date3: Date;
  rangeDates: Date;
  searchInput: string;

  showMoreText = true;
  showLess = false;
  showLessText = true;



  constructor() {
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cities2 = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
  }


  ngOnInit(): void {
  }

}
