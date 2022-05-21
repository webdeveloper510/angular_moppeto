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
  selector: 'app-vendors-revenue-ranking',
  templateUrl: './vendors-revenue-ranking.component.html',
  styleUrls: ['./vendors-revenue-ranking.component.scss']
})
export class VendorsRevenueRankingComponent implements OnInit {

  // selected: Date;
  dateRange: string;


  cities: City[];
  selectedCity: City;

  cities2: City[];
  selectedCity2: City;

  date3: Date;
  days: string;
  rangeDates: Date;

  showMoreText = true;
  showLess = false;
  showLessText = true;
  searchInput: string;


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
