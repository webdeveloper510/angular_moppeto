import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

interface ListBox {
  name: string,
  code: string
}

@Component({
  selector: 'app-search-by-activity',
  templateUrl: './search-by-activity.component.html',
  styleUrls: ['./search-by-activity.component.scss']
})
export class SearchByActivityComponent implements OnInit {

  cities: City[];
  selectedCity: City;


  listbox: ListBox[];
  selectedListbox: ListBox;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.listbox = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Extra', code: 'EX1' },
      { name: 'Extra2', code: 'EX2' },
      { name: 'Extra3', code: 'EX3' },
      { name: 'Extra4', code: 'EX4' },
      { name: 'Extra5', code: 'EX5' }
    ];
  }

  ngOnInit(): void {
  }
}
