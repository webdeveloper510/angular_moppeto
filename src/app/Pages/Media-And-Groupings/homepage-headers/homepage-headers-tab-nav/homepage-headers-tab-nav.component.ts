import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomePageHeaderService } from 'src/app/services/media_and_groupings/home-page-header.service';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { platformTypeList } from '../homepage-headers.model';

@Component({
  selector: 'app-homepage-headers-tab-nav',
  templateUrl: './homepage-headers-tab-nav.component.html',
  styleUrls: ['./homepage-headers-tab-nav.component.scss'],
  providers: [DatePipe]
})
export class HomepageHeadersTabNavComponent implements OnInit {
  private unsubscribeCountry$ = new Subject<void>();
  countryList = [];
  selectedCountry: string;
  platformTypeList = platformTypeList;
  cityList = [];
  constructor(private router: Router,
    public trackByService: TrackByService,
    private homePageHeaderService: HomePageHeaderService,
    private commonFunctionsService: CommonFunctionsService) { }

  ngOnInit(): void {
    this.router.navigate(['/homepage-headers/vendor']);
    this.getCountry();
  }

  getCountry(): void {
    this.commonFunctionsService.getCountries().pipe(takeUntil(this.unsubscribeCountry$)).subscribe((countries: any) => {
     this.countryList = countries;
    });
  }

  onChangePlatForm(value) {
    this.homePageHeaderService.plateformSubject.next(value);
  }

  changeCountry(value) {
    this.cityList = value.cities;
  }

  changeCity(value) {
    this.homePageHeaderService.citySubject.next(value);
  }
}
