import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/country/countries.service';
import { StaticInfoService } from 'src/app/services/Pages/static-info.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { StaticInfoTextEnum } from '../../static_info.model';

@Component({
  selector: 'app-view-other-info',
  templateUrl: './view-other-info.component.html',
  styleUrls: ['./view-other-info.component.scss']
})
export class ViewOtherInfoComponent implements OnInit {


  // country list
  countryList = [];
  private unsubscribecountryList$ = new Subject<void>();
  private unsubscribeGetInfo$ = new Subject<void>();

  selectedCountry: string;
  infoId: string;
  staticInfoDetail
  title: string;
  contents = [];
  selectedType: string;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute,
    private staticInfoService: StaticInfoService,
    public trackByService: TrackByService,
    private router: Router,
  ) {
    this.getCountries();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params["id"];
      const type = params["type"];
      const country = params["country"]
      if (id && type && country) {
        this.infoId = id;
        this.title = StaticInfoTextEnum[type];
        this.selectedCountry = country;
        this.selectedType = type;
        this.getInfoDetail(id, type);
      }
    });
  }

  getInfoDetail(id, type) {
    this.contents = [];
    this.staticInfoDetail = null;
    this.staticInfoService.getInfo(type, this.selectedCountry).pipe(takeUntil(this.unsubscribeGetInfo$)).subscribe((res: any) => {
      if (res && res.content && res.content.length > 0) {
        this.contents = res.content;
        this.staticInfoDetail = this.contents.find(x => x.id == this.infoId);
        console.log('this.staticInfoDetail ', this.staticInfoDetail);
      }
    });
  }

  getCountries() {
    this.countryList = [];
    this.countriesService.getAllCountries().pipe(takeUntil(this.unsubscribecountryList$)).subscribe((res: any) => {
      this.countryList = res;
    });
  }

  back() {
    this.router.navigate(
      ['/other-info'],
      { queryParams: { country: this.selectedCountry } }
    );
  }

}
