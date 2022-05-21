import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/country/countries.service';
import { StaticInfoService } from 'src/app/services/Pages/static-info.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { CommonModalForStaticInfoComponent } from '../../../../shared/common-modal-for-static-info/common-modal-for-static-info.component';
import { defaultLanguage, StaticInfo, StaticInfoTypeEnum } from '../../static_info.model';


@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  // country list
  countryList = [];
  private unsubscribecountryList$ = new Subject<void>();
  private unsubscribeStaticInfo$ = new Subject<void>();
  private unsubscribeGetEmail$ = new Subject<void>();
  private unsubscribeAddEditEmail$ = new Subject<void>();

  contactEmailDetail;
  termsOfUseList = [];
  selectedTermsOfUse = null;
  staticInfoTypeEnum = StaticInfoTypeEnum;
  selectedCountry: string;
  termsOfServiceList = [];
  selectedTermsOfService = null;
  privacyPolicyList = [];
  selectedPrivacyPolicy = null;
  constructor(
    private dialog: MatDialog,
    private countriesService: CountriesService,
    private staticInfoService: StaticInfoService,
    public trackByService: TrackByService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const country = params["country"];
      if (country) {
        this.selectedCountry = country;
        this.changeCountry();
      }
    });
    this.getCountries();
  }

  getCountries() {
    this.countryList = [];
    this.countriesService.getAllCountries().pipe(takeUntil(this.unsubscribecountryList$)).subscribe((res: any) => {
      this.countryList = res;
    });
  }

  getContactEmail() {
    this.contactEmailDetail = null;
    this.staticInfoService.getContactEmail(this.selectedCountry).pipe(takeUntil(this.unsubscribeGetEmail$)).subscribe((res: any) => {
      if (res && res.content && res.content.length > 0)
        this.contactEmailDetail = res.content[0];
    });
  }

  changeCountry() {
    this.getStaticInfo();
  }

  getStaticInfo() {
    this.resetDetail();
    forkJoin(
      [this.staticInfoService.getContactEmail(this.selectedCountry),
      this.staticInfoService.getTermsOfUse(this.selectedCountry),
      this.staticInfoService.getTermsOfService(this.selectedCountry),
      this.staticInfoService.getPrivacyPolicy(this.selectedCountry),
      ]).pipe(takeUntil(this.unsubscribeStaticInfo$)).subscribe(res => {
        console.log(res);
        if (res && res.length > 0) {
          res.forEach(element => {
            this.setInformation(element.name, element.content);
          });
        }
      }, err => {
        console.log('error', err);
      });
  }

  resetDetail() {
    this.contactEmailDetail = null;
    this.termsOfServiceList = [];
    this.selectedTermsOfService = null;
    this.termsOfUseList = [];
    this.selectedTermsOfUse = null;
    this.privacyPolicyList = [];
    this.selectedPrivacyPolicy = null;
  }

  setInformation(name, content) {
    if (content && content.length > 0) {
      switch (name) {
        case StaticInfoTypeEnum.email:
          this.contactEmailDetail = content[0];
          break;
        case StaticInfoTypeEnum.tos:
          this.termsOfServiceList = content;
          this.selectedTermsOfService = this.termsOfServiceList[0];
          break;
        case StaticInfoTypeEnum.tou:
          this.termsOfUseList = content;
          this.selectedTermsOfUse = this.termsOfUseList[0];
          break;
        case StaticInfoTypeEnum.pp:
          this.privacyPolicyList = content;
          this.selectedPrivacyPolicy = this.privacyPolicyList[0];
          break;
        default:
          break;
      }
    }
  }

  addEditContactEmail(email) {
    const model: StaticInfo = {
      id: this.contactEmailDetail ? this.contactEmailDetail.id : null,
      contentData: email,
      country: this.selectedCountry,
      contentLanguage: this.contactEmailDetail ? this.contactEmailDetail.language : defaultLanguage,
    }
    this.staticInfoService.addEditContactEmail(model).pipe(takeUntil(this.unsubscribeAddEditEmail$)).subscribe((res: any) => {
      this.getContactEmail();
    });
  }

  openEditContactMailModal(isNew = false): void {
    const dialogRef = this.dialog.open(CommonModalForStaticInfoComponent, {
      data: {
        title: "Contact us email",
        textSection: true,
        suspendOrReInstateBodyText: "Email",
        email: !isNew ? this.contactEmailDetail?.content : null
      },
      panelClass: ['editMailModal']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.addEditContactEmail(dialogResult);
      }
    });
  }

  CommonModalForStaticInfoComponent(CommonModalForStaticInfoComponent: any, arg1:
    {
      maxWidth: string; data: {
        title: string;
        textSection: boolean;
        suspendOrReInstateBodyText: string;
      };
    }) {
    throw new Error('Method not implemented.');
  }

}
