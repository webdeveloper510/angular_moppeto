import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-search-by-participant',
  templateUrl: './search-by-participant.component.html',
  styleUrls: ['./search-by-participant.component.scss']
})
export class SearchByParticipantComponent implements OnInit {

  cities: City[];
  selectedCity: City;

  searchBody: boolean = true;
  searchTableBody: boolean = false;
  upperTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    let routeData = this.activatedRoute.snapshot.params['participant'];
    if (routeData === 'ongoing-future-participant') {
      this.upperTitle = "Ongoing / future participant"
    }
    else {
      this.upperTitle = "Past participant"
    }

  }

  ngOnInit(): void {
  }

  showSearchTableBody() {
    this.searchBody = false;
    this.searchTableBody = true;
  }

  backbutton() {
    if (this.searchBody == true) {
      this.router.navigate(['/activity-management/class-list']);
    }
    if (this.searchTableBody == true) {
      this.searchBody = true;
      this.searchTableBody = false;
    }
  }

}
