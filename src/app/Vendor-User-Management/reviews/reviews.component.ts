import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { urlparamsEnum } from 'src/app/pagination/pagination.model';
import { PaginationService } from 'src/app/services/pagination.service';
import { ReviewService } from 'src/app/services/vendor_user_management/review.service';
import { CommonConstant, ReadMoreTextLimit } from 'src/app/shared/contants';
import { ReviewsResponse } from 'src/app/shared/interfaces/vendor_user_management/review.I';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { ratingList, reviewStatusEnum } from './reviews.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [
    DatePipe
  ]
})
export class ReviewsComponent implements OnInit {
  countries: any[];
  selectedCountry: any;

  vendorList: any[];
  selectedVendor: any;

  searchDate

  showMoreText = true;
  showLess = false;
  showLessText = true;
  searchInput: string;

  //list
  private unsubscribe$ = new Subject<void>();
  private unsubscribeVendor$ = new Subject<void>();
  private unsubscribeCountry$ = new Subject<void>();

  isAPIResponseCome: boolean = false;
  results = [];
  stars: any;
  selectedStar
  _isSearchResult: boolean = false;

  ratingList = ratingList;
  reviewLength: any = ReadMoreTextLimit.ReviewTextLimit;

  reviewStatusEnum = reviewStatusEnum;

  constructor(private paginationService: PaginationService,
    private commonFunctionsService: CommonFunctionsService,
    private trackByService: TrackByService,
    private datePipe: DatePipe,
    private reviewService: ReviewService) {
  }

  ngOnInit(): void {
    this.getData();
    this.getVendor();
    this.getCountry();
  }


  getData() {
    this.paginationService.urlparams = urlparamsEnum.perpage + '=' + this.paginationService.pageSize;;
    let resData;
    this.isAPIResponseCome = false;
    if (this.selectedCountry && this.selectedCountry.name) {
      this.paginationService.urlparams += `&country=${this.selectedCountry.name}`;
    }
    if (this.selectedStar) {
      this.paginationService.urlparams += `&stars=${this.selectedStar}`;
    }
    if (this.selectedVendor) {
      this.paginationService.urlparams += `&vendor_code=${this.selectedVendor.vendor.code}`;
    }
    if (this.searchDate && this.searchDate.length > 0) {
      this.paginationService.urlparams += `&first_date=${this.datePipe.transform(this.searchDate[0], 'yyyy-MM-dd')}`;
    }
    if (this.searchDate && this.searchDate.length > 0) {
      this.paginationService.urlparams += `&last_date=${this.datePipe.transform(this.searchDate[1], 'yyyy-MM-dd')}`;
    }
    this.reviewService.getReviews(this.paginationService.urlparams).
      pipe(takeUntil(this.unsubscribe$), finalize(() => {
        this.isAPIResponseCome = true;
      })).subscribe((res: ReviewsResponse) => {
        resData = res;
        if (this.selectedStar)
          this._isSearchResult = true;
        else
          this._isSearchResult = false;
        this.isAPIResponseCome = true;
        this.paginationService.setPaginationData(res);
        this.stars = resData.results.stars;
        if (this.stars && this.stars.over_all) {
          this.stars.over_all = parseFloat(this.stars.over_all).toFixed(2)
        }
        if (this.stars) {
          this.ratingList.forEach(element => {
            element.ratingCount = this.stars[element.key];
          });
        }
        this.results = resData.results ? resData.results.data : [];
        if (this.results && this.results.length > 0)
          this.results = this.results.map(data => ({
            ...data,
            reviewCount: Array(data.ratings).fill(data.ratings).map((x, i) => i),
            reviewTextLimit: ReadMoreTextLimit.ReviewTextLimit,
            reviewDisplayText: CommonConstant.ReadMoreText,
            responseTextLimit: ReadMoreTextLimit.ReviewTextLimit,
            responseDisplayText: CommonConstant.ReadMoreText
          }));
      });
  }

  getVendor() {
    const querparams = {
      country: this.selectedCountry ? this.selectedCountry.name : null
    }
    this.vendorList = [];
    this.reviewService.getVendor(querparams).
      pipe(takeUntil(this.unsubscribeVendor$)).subscribe((res: any) => {
        this.vendorList = res;
      });
  }

  private getCountry(): void {
    this.countries = [];
    this.commonFunctionsService.getCountries().pipe(takeUntil(this.unsubscribeCountry$)).subscribe((countries: any) => {
      this.countries = countries;
    });
  }

  private onChangeStatus(id, status): void {
    const model = {
      status
    }
    this.reviewService.onChangeStatus(id, model).pipe(takeUntil(this.unsubscribeCountry$)).subscribe((res: any) => {
      this.getData();
    });
  }

  pageChangeEvent() {
    this.getData();
  }

  viewMoreReview(item) {
    this.results = this.results.map(x => {
      if (item.id === x.id) {
        if (x.reviewTextLimit === ReadMoreTextLimit.ReviewTextLimit) {
          x.reviewTextLimit = x.review.toString().length;
          x.reviewDisplayText = CommonConstant.ReadLessText;
        }
        else {
          x.reviewTextLimit = ReadMoreTextLimit.ReviewTextLimit;
          x.reviewDisplayText = CommonConstant.ReadMoreText;
        }
      }
      return x;
    });
  }

  viewMoreResponse(item) {
    this.results = this.results.map(x => {
      if (item.id === x.id) {
        if (x.responseTextLimit === ReadMoreTextLimit.ReviewTextLimit) {
          x.responseTextLimit = x.response.toString().length;
          x.responseDisplayText = CommonConstant.ReadLessText;
        }
        else {
          x.responseTextLimit = ReadMoreTextLimit.ReviewTextLimit;
          x.responseDisplayText = CommonConstant.ReadMoreText;
        }
      }
      return x;
    });
  }

  onRateClick(event): void {
    this.selectedStar = event;
    this.getData();
  }

  onChange() {
    this.selectedVendor = null;
    this.getVendor();
  }


  filterReview() {
    if (!this.selectedCountry && !this.selectedVendor && (!this.searchDate || this.searchDate.length == 0))
      return
    this.getData();
  }

  reset() {
    this.selectedCountry = null;
    this.selectedVendor = null;
    this.searchDate = null;
    this.selectedStar = null;
    this._isSearchResult = false;
    this.getData();
  }

  ngOnDestroy(): void {
    if (this.unsubscribe$) {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
    if (this.unsubscribeVendor$) {
      this.unsubscribeVendor$.next();
      this.unsubscribeVendor$.complete();
    }
  }

}
