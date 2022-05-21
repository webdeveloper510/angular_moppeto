import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomePageHeaderService } from 'src/app/services/media_and_groupings/home-page-header.service';
import { Guid } from 'src/app/shared/class/guid';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { HeaderModel } from '../homepage-headers.model';

@Component({
  selector: 'app-homepage-headers-super-admin',
  templateUrl: './homepage-headers-super-admin.component.html',
  styleUrls: ['./homepage-headers-super-admin.component.scss']
})
export class HomepageHeadersSuperAdminComponent implements OnInit {

  beforeOpenEditSection: boolean = true;
  openEditSection: boolean = false;
  colbodyData: string = "";

  isAPIReponseCome: boolean = false;
  selectedCity: string = null;
  selectedPlatform: string = null;
  headerList = [];
  dateList = [];
  unsubscribeGetData$ = new Subject<any>();
  unsubscribeAddData$ = new Subject<any>();
  unsubscribeEditData$ = new Subject<any>();
  unsubscribeDeleteData$ = new Subject<any>();

  isNew = false;
  isEdit = false;
  selectedId = null;
  startDate = null;
  endDate = null;

  constructor(private homePageHeaderService: HomePageHeaderService,
    private dialog: MatDialog,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    if (this.router.url.indexOf('super-admin') > -1) {
      this.homePageHeaderService.plateformSubject.subscribe(res => {
        this.selectedPlatform = res;
        this.callAPI();
      })
      this.homePageHeaderService.citySubject.subscribe(res => {
        this.selectedCity = res;
        this.callAPI();
      })
    }
  }

  callAPI() {
    if (this.selectedCity && this.selectedPlatform) {
      this.startDate = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
      var endDate = new Date();
      endDate.setDate(endDate.getDate() + 4);
      this.endDate = this.datePipe.transform(endDate, 'yyyy-MM-dd');
      this.getData();
    }
  }

  getData(): void {
    if (this.unsubscribeGetData$ != null && !this.unsubscribeGetData$.closed)
      this.unsubscribeGetData$.complete();
    this.isAPIReponseCome = false;
    const queryParams = {
      platform_type: this.selectedPlatform,
      city: this.selectedCity,
      first_date: this.startDate,
      last_date: this.endDate
    }
    this.headerList = [];
    this.dateList = [];
    this.homePageHeaderService.getSuperAdminHeaderList(queryParams).pipe(takeUntil(this.unsubscribeGetData$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      if (res) {
        this.dateList = res.dates;
        this.dateList.forEach((element, i) => {
          let model: any = {};
          model.header1 = this.getHeader(0, i);
          model.header2 = this.getHeader(1, i);
          model.header3 = this.getHeader(2, i);
          model.header4 = this.getHeader(3, i);
          model.header5 = this.getHeader(4, i);
          model.id = Guid.create();
          if (i !== 4)
            this.headerList.push(model);
        });
      }
    });
  }

  getHeader(dataindex, i) {
    return {
      headerData: this.dateList[dataindex].headers[i] ? this.dateList[dataindex].headers[i] : null,
      id: Guid.create(),
      date: this.dateList[dataindex].date
    }
  }

  newClick(id) {
    this.isNew = true;
    this.selectedId = id;
  }

  editClick(id, text) {
    this.isEdit = true;
    this.selectedId = id;
    this.colbodyData = text;
  }

  openEditSectionfn() {
    this.beforeOpenEditSection = false;
    this.openEditSection = true;
  }

  closeEditSectionfn() {
    this.beforeOpenEditSection = true;
    this.openEditSection = false;
    this.isNew = false;
    this.colbodyData = "";
    this.isEdit = false;
  }

  addEditHeader(date, id) {
    if (this.isNew) {
      this.callAddAPI(date);
    } else {
      this.callEditAPI(id);
    }
  }

  callAddAPI(date) {
    let datamodel = this.getModel(date);
    this.homePageHeaderService.addSuperAdminHeader(datamodel).pipe(takeUntil(this.unsubscribeAddData$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      if (res) {
        this.getData();
        this.closeEditSectionfn();
      }
    });
  }

  callEditAPI(id) {
    let datamodel = {
      text: this.colbodyData
    };
    this.homePageHeaderService.editSuperAdminHeader(datamodel, id).pipe(takeUntil(this.unsubscribeEditData$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      if (res) {
        this.getData();
        this.closeEditSectionfn();
      }
    });
  }


  confirmDelete(id) {
    const title = "Delete Header";
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
        this.deleteAPI(id);
      }
    });
  }

  deleteAPI(id) {
    this.homePageHeaderService.deleteSuperAdminHeader(id).pipe(takeUntil(this.unsubscribeDeleteData$)).subscribe((res) => {
      this.getData();
    });
  }

  getModel(selectedDate, id = null): HeaderModel {
    const headerModel: HeaderModel = {
      city: this.selectedCity,
      platform_type: this.selectedPlatform,
      text: this.colbodyData,
      date: selectedDate,
      id: id
    }
    return headerModel;
  }

  next() {
    var date = new Date(this.endDate);
    const startDate = date.setDate(date.getDate() + 1);
    const endDate = date.setDate(date.getDate() + 4);
    this.startDate = this.datePipe.transform(new Date(startDate), 'yyyy-MM-dd');
    this.endDate = this.datePipe.transform(new Date(endDate), 'yyyy-MM-dd');
    this.getData();
  }


  previous() {
    var date = new Date(this.startDate);
    const startDate = date.setDate(date.getDate() - 5);
    const endDate = new Date(this.startDate).setDate(new Date(this.startDate).getDate() - 1);
    this.startDate = this.datePipe.transform(new Date(startDate), 'yyyy-MM-dd');
    this.endDate = this.datePipe.transform(new Date(endDate), 'yyyy-MM-dd');
    this.getData();
  }

  ngOnDestroy(): void {
    if (this.unsubscribeGetData$) {
      this.unsubscribeGetData$.next();
      this.unsubscribeGetData$.complete();
    }
    if (this.unsubscribeAddData$) {
      this.unsubscribeAddData$.next();
      this.unsubscribeAddData$.complete();
    }
    if (this.unsubscribeEditData$) {
      this.unsubscribeEditData$.next();
      this.unsubscribeEditData$.complete();
    }
    if (this.unsubscribeDeleteData$) {
      this.unsubscribeDeleteData$.next();
      this.unsubscribeDeleteData$.complete();
    }
  }
}