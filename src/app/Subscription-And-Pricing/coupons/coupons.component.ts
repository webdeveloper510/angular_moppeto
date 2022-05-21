import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

interface City2 {
  name: string
}

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {


  cities: City[];
  selectedCity: City;

  cities2: City2[];
  selectedCity2: City2;

  searchInput: string;


  discountTypeAscSort: boolean = true;
  discountAscSort: boolean = true;
  redeemAscSort: boolean = true;

  constructor() {
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cities2 = [
      { name: '%' },
      { name: '$' },
    ];
  }

  ngOnInit(): void {
  }

  togleSorting(sortingType: string) {
    if(sortingType==='type'){
      this.discountTypeAscSort = !this.discountTypeAscSort;
    }
    if(sortingType==='discount'){
      this.discountAscSort = !this.discountAscSort;
    }
    if(sortingType==='redeem'){
      this.redeemAscSort = !this.redeemAscSort;
    }
  }




}
