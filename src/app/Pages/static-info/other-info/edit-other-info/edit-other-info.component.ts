import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/country/countries.service';
import { StaticInfoService } from 'src/app/services/Pages/static-info.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { environment } from 'src/environments/environment';
import { defaultLanguage, StaticInfo, StaticInfoTextEnum, StaticInfoTypeEnum } from '../../static_info.model';

@Component({
  selector: 'app-edit-other-info',
  templateUrl: './edit-other-info.component.html',
  styleUrls: ['./edit-other-info.component.scss']
})
export class EditOtherInfoComponent implements OnInit {

  @ViewChild('editor') editor;

  // country list
  countryList = [];
  private unsubscribecountryList$ = new Subject<void>();
  private unsubscribeAddEditInfo$ = new Subject<void>();

  staticInfoForm: FormGroup;

  body;

  isAdd: boolean;
  private unsubscribeDelete$ = new Subject<void>();
  type: string;
  typeText: string;
  selectedCountry: null;
  private unsubscribeGetInfo$ = new Subject<void>();
  contents = [];
  staticInfoDetail = null;
  baseUrl = environment.backedUrl.slice(0, -1);
  
  infoType: string;
  main = defaultLanguage;

  changedEditor($event) {
  }

  constructor(
    private dialog: MatDialog,
    private countriesService: CountriesService,
    private staticInfoService: StaticInfoService,
    public trackByService: TrackByService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public createForm(): void {
    this.staticInfoForm = this.formBuilder.group({
      country: [this.selectedCountry, [Validators.required]],
      contentData: ['', [Validators.required]],
      contentLanguage: ['', Validators.required],
      id: ['']
    });
  }

  tools = {
    syntax: false,

    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                        // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ]

  }


  ngOnInit(): void {
    this.getCountries();
    this.route.queryParams.subscribe((params) => {
      const id = params["id"];
      this.infoType = params["type"];
      const country = params["country"];
      if (this.infoType)
        this.typeText = StaticInfoTextEnum[this.infoType];
      if (country) {
        this.selectedCountry = country;
      }
      if (id && this.infoType && country)
        this.isAdd = false;
      else
        this.isAdd = true;
      this.getInfoDetail(id);
    });
    this.createForm();
  }

  getCountries() {
    this.countryList = [];
    this.countriesService.getAllCountries().pipe(takeUntil(this.unsubscribecountryList$)).subscribe((res: any) => {
      this.countryList = res;
    });
  }

  onSubmit() {
    const element = document.querySelector('.ql-editor');
    const model: StaticInfo = this.staticInfoForm.value;
    model.contentData = element.innerHTML;
    model.country = this.selectedCountry;
    this.staticInfoService.addEditInfo(this.infoType, model).pipe(takeUntil(this.unsubscribeAddEditInfo$)).subscribe((res: any) => {
      this.back();
    });
  }

  back() {
    this.router.navigate(
      ['/other-info'],
      { queryParams: { country: this.selectedCountry } }
    );
  }

  getInfoDetail(id) {
    this.contents = [];
    this.staticInfoDetail = null;
    this.staticInfoService.getInfo(this.infoType, this.selectedCountry).pipe(takeUntil(this.unsubscribeGetInfo$)).subscribe((res: any) => {
      if (res && res.content && res.content.length > 0) {
        this.contents = res.content;
        this.staticInfoDetail = id ? this.contents.find(x => x.id == id) : null;
        this.setFormValue();
      }
    });
  }

  setFormValue() {
    this.staticInfoForm.controls.id.setValue(this.staticInfoDetail.id);
    this.staticInfoForm.controls.contentData.setValue(this.staticInfoDetail.content);
    this.staticInfoForm.controls.contentLanguage.setValue(this.staticInfoDetail.language);

  }


  onLangClick(data) {
    this.staticInfoDetail = data;
    this.setFormValue();
  }

  
  confirmDelete() {
    const title = "Delete "+StaticInfoTextEnum[this.infoType];
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: {
        title: title,
        message: `${title}?`,
      },
      panelClass: ['customDialogClassAddNewCountry']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteAPI();
      }
    });
  }

  
  deleteAPI() {
    this.staticInfoService.deleteStaticInfo(this.staticInfoDetail.id).pipe(takeUntil(this.unsubscribeDelete$)).subscribe((res) => {
      this.back();
    });
  }


  ngOnDestroy() {
    if (this.unsubscribeDelete$) {
      this.unsubscribeDelete$.next();
      this.unsubscribeDelete$.complete();
    }
    if (this.unsubscribeAddEditInfo$) {
      this.unsubscribeAddEditInfo$.next();
      this.unsubscribeAddEditInfo$.complete();
    }
    if (this.unsubscribecountryList$) {
      this.unsubscribecountryList$.next();
      this.unsubscribecountryList$.complete();
    }
    if (this.unsubscribeGetInfo$) {
      this.unsubscribeGetInfo$.next();
      this.unsubscribeGetInfo$.complete();
    }
  }
}
