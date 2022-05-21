import { Component, OnInit } from '@angular/core';

interface City {
  name: string
}
interface City2 {
  name: string
}
interface City3 {
  name: string
}

@Component({
  selector: 'app-add-broadcast',
  templateUrl: './add-broadcast.component.html',
  styleUrls: ['./add-broadcast.component.scss']
})
export class AddBroadcastComponent implements OnInit {

  testingBoolean: boolean = true;
  whenFourRadioShow: boolean = true;
  whiteConfirmButton: boolean = false;
  userEditMode: boolean = true;
  userOnlyViewMode: boolean = false;

  cities: City[];
  selectedCity: City;
  cities2: City2[];
  selectedCity2: City2;
  cities3: City3[];
  selectedCity3: City3;

  constructor() {
    this.cities = [
      { name: 'All Countries' },
      { name: 'India' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'Paris' }
    ];
    this.cities2 = [
      { name: 'All Cities' },
      { name: 'India' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'Paris' }
    ];
    this.cities3 = [
      { name: 'All Cities' },
      { name: 'India' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'Paris' }
    ];
  }

  ngOnInit(): void {
  }


}
