import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/country/countries.service';
import { FeedbackService } from 'src/app/services/media_and_groupings/feedback.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent implements OnInit {

  searchInput: string;

  isAPIReponseCome: boolean = false;
  feedBackList = [];
  selectedCountry = null;
  selectedCity = null;
  countryList = [];

  private unsubscribecountryList$ = new Subject<void>();
  private unsubscribeFeedback$ = new Subject<void>();


  constructor(private feedbackService: FeedbackService,
    private countriesService: CountriesService,
    private trackByService: TrackByService,
    private paginationService: PaginationService) {
  }

  ngOnInit(): void {
    this.getCountries();
    this.getData();
  }

  getData(): void {
    this.isAPIReponseCome = false;
    const queryParams = {
      country: this.selectedCountry ? this.selectedCountry.id : null,
      city: this.selectedCity ? this.selectedCity.id : null
    }
    this.feedBackList = [];
    this.feedbackService.getFeedbackList(this.paginationService.urlparams, queryParams).pipe(takeUntil(this.unsubscribeFeedback$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      this.feedBackList = res.results;
      this.paginationService.setPaginationData(res);
    });
  }

  onCityChange() {
    // this.getData();
  }

  pageChangeEvent() {
    this.getData();
  }

  reset() {
    this.selectedCity = null;
    this.selectedCountry = null;
    this.getData();
  }

  getCountries() {
    this.countriesService.getAllCountries().pipe(takeUntil(this.unsubscribecountryList$)).subscribe((res: any) => {
      this.countryList = res;
    });
  }

}
