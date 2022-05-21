import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

interface City2 {
  name: string
}

@Component({
  selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.scss']
})
export class PaymentReceiptComponent implements OnInit {

  cities: City[];
  selectedCity: City | string;

  cities2: City2[];
  selectedCity2: City2 | string;

  demoTable = [
    {
      status: 'success'
    },
    {
      status: 'success'
    },
    {
      status: 'failed'
    },
    {
      status: 'success'
    },
    {
      status: 'failed'
    },
    {
      status: 'success'
    },
    {
      status: 'success'
    },
    {
      status: 'failed'
    },
    {
      status: 'success'
    },
    {
      status: 'failed'
    },
  ]

  constructor() {
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cities2 = [
      { name: 'Subscription - new' },
      { name: 'Subscription - renewal' }
    ];
  }

  ngOnInit(): void {
  }

}
