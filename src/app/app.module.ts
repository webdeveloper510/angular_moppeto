import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppTopBarComponent } from './app.topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule, DatePipe } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SubscriptionPannelComponent } from './subscription-pannel/subscription-pannel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SampleModalsComponent } from './sample-modals/sample-modals.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { TabNavsComponent } from './Vendor-User-Management/tab-navs/tab-navs.component';
import { AvatarsComponent } from './Vendor-User-Management/avatars/avatars.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TooltipModule } from 'primeng/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryStatisticsComponent } from './Vendor Reports/category-statistics/category-statistics.component';
import { VendorsRevenueRankingComponent } from './Vendor Reports/vendors-revenue-ranking/vendors-revenue-ranking.component';
import { ActivityRevenueRankingComponent } from './Vendor Reports/activity-revenue-ranking/activity-revenue-ranking.component';
import { VendorLocationRevenueRankingComponent } from './Vendor Reports/vendor-location-revenue-ranking/vendor-location-revenue-ranking.component';
import { CityRevenueRankingComponent } from './Vendor Reports/city-revenue-ranking/city-revenue-ranking.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { SubscriptionRevenueComponent } from './Revenue/subscription-revenue/subscription-revenue.component';
import { RevenueTabNavsComponent } from './Revenue/revenue-tab-navs/revenue-tab-navs.component';
import { AdvertisingRevenueSummaryComponent } from './Revenue/advertising-revenue-summary/advertising-revenue-summary.component';
import { AdvertisingRevenueSearchWordsComponent } from './Revenue/advertising-revenue-search-words/advertising-revenue-search-words.component';
import { AdvertisingRevenueBannersComponent } from './Revenue/advertising-revenue-banners/advertising-revenue-banners.component';
import { ServicesModule } from "./services/services.module";
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { ToastsContainer } from './Vendor-User-Management/toast/toast-container.component';
import { CategoryImagesIconsTabNavComponent } from './Pages/Media-And-Groupings/Category-Images-Icons/category-images-icons-tab-nav/category-images-icons-tab-nav.component';
import { CategoryIconsComponent } from './Pages/Media-And-Groupings/Category-Images-Icons/category-icons/category-icons.component';
import { CategoryImagesComponent } from './Pages/Media-And-Groupings/Category-Images-Icons/category-images/category-images.component';
import { BannersTabNavComponent } from './Pages/Media-And-Groupings/Banners/banners-tab-nav/banners-tab-nav.component';
import { HomepageBannersVendorComponent } from './Pages/Media-And-Groupings/Banners/homepage-banners-vendor/homepage-banners-vendor.component';
import { HomepageBannersSuperAdminComponent } from './Pages/Media-And-Groupings/Banners/homepage-banners-super-admin/homepage-banners-super-admin.component';
import { CouponsComponent } from './Subscription-And-Pricing/coupons/coupons.component';
import { DetailsOfCouponsReedemedComponent } from './Subscription-And-Pricing/details-of-coupons-reedemed/details-of-coupons-reedemed.component';
import { AddCouponComponent } from './Subscription-And-Pricing/add-coupon/add-coupon.component';
import { EditCouponComponent } from './Subscription-And-Pricing/edit-coupon/edit-coupon.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PersonalDetailsComponent } from './Profiles/personal-details/personal-details.component';
import { PersonalSettingsComponent } from './Profiles/personal-settings/personal-settings.component';
import { UserTabNavsComponent } from './Profiles/user-tab-navs/user-tab-navs.component';
import { SubAdminModule } from './Pages/sub-admin/sub-admin.module';
import { StaticInfoModule } from './Pages/static-info/static-info.module';
import { ReceiptModule } from './Pages/receipt/receipt.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpInterceptorInterceptor } from './HttpInterceptor/http-interceptor.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { NoTableDataViewModule } from './shared/no-table-data-view/no-table-data-view.module';
import { BlankValueModule } from './shared/Pipes/blank-Value/blank-value.module';
import { TitleCaseModule } from './pipes/title-case/title-case.module';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    SampleModalsComponent,
    SidepanelComponent,
    TabNavsComponent,
    AvatarsComponent,
    CategoryStatisticsComponent,
    VendorsRevenueRankingComponent,
    ActivityRevenueRankingComponent,
    VendorLocationRevenueRankingComponent,
    CityRevenueRankingComponent,
    SubscriptionRevenueComponent,
    RevenueTabNavsComponent,
    AdvertisingRevenueSummaryComponent,
    AdvertisingRevenueSearchWordsComponent,
    AdvertisingRevenueBannersComponent,
    CustomDatePipe,
    ToastsContainer,
    CouponsComponent,
    DetailsOfCouponsReedemedComponent,
    AddCouponComponent,
    EditCouponComponent,
    CategoryImagesIconsTabNavComponent,
    CategoryIconsComponent,
    CategoryImagesComponent,
    BannersTabNavComponent,
    HomepageBannersVendorComponent,
    HomepageBannersSuperAdminComponent,
    PersonalDetailsComponent,
    PersonalSettingsComponent,
    UserTabNavsComponent,
    SubscriptionPannelComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PanelModule,
    PanelMenuModule,
    BrowserModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    AppRoutingModule,
    TabViewModule,
    NoTableDataViewModule,
    ToastModule,
    RippleModule,
    FileUploadModule,
    ToolbarModule,
    TableModule,
    CardModule,
    RadioButtonModule,
    StepsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    AutoCompleteModule,
    OverlayPanelModule,
    ImageCropperModule,
    FontAwesomeModule,
    SharedModule,
    NgxDropzoneModule,
    TooltipModule,
    NgbModule,
    NgxDaterangepickerMd,
    ServicesModule,
    MatDialogModule,
    MatAutocompleteModule,
    BsDatepickerModule.forRoot(),
    SubAdminModule,
    StaticInfoModule,
    ReceiptModule,
    LoadingBarRouterModule,
    BlankValueModule,
    TitleCaseModule,
    ToastrModule.forRoot(),
    MatIconModule,

  ],
  // providers: [ MenuService ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  // entryComponents: [ConfirmDialogComponent]

})
export class AppModule { }
