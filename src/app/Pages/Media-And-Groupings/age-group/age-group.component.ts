import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AgeGroupService } from 'src/app/services/media_and_groupings/age-group.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { CommonModalMediaAndGroupingsComponent } from 'src/app/shared/common-modal-media-and-groupings/common-modal-media-and-groupings.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { AddEditAgeGroupComponent } from './add-edit-age-group/add-edit-age-group.component';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnInit {
  countries = [];
  ageGroupList = [];
  private unsubscribeCountry$ = new Subject<void>();
  private unsubscribeAgeGroup$ = new Subject<void>();
  private unsubscribeAddAgeGroup$ = new Subject<void>();
  private unsubscribeDeleteAgeGroup$ = new Subject<void>();
  private unsubscribeEditAgeGroup$ = new Subject<void>();

  isAPIReponseCome: boolean = false;
  selectedCountry: any;

  constructor(
    private dialog: MatDialog, private commonFunctionsService: CommonFunctionsService,
    private ageGroupService: AgeGroupService,
    public trackByService: TrackByService
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  onChangeCountry() {
    this.getData();
  }

  getData(): void {
    this.ageGroupList = [];
    this.isAPIReponseCome = false;
    const queryParams = {
      country: this.selectedCountry ? this.selectedCountry.id : null
    }
    this.ageGroupService.getAgeGroupList(queryParams).pipe(takeUntil(this.unsubscribeAgeGroup$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      if (res.results && res.results.length > 0)
        this.ageGroupList = res.results.map(x => {
          x.min_age = x.min_age.toString();
          x.max_age = x.max_age.toString();
          return x;
        });
    });
  }

  getCountry(): void {
    this.commonFunctionsService.getCountries().pipe(takeUntil(this.unsubscribeCountry$)).subscribe((countries: any) => {
      this.countries = countries;
    });
  }

  addNewAgeGroup(isEdit = false, formData = null): void {
    if (formData && formData.country)
      delete formData['country'];
    const panelClass = isEdit ? ['customDialogClassInputAndDropdown', 'customDialogClassOrangeHeader'] : ['customDialogClassInputAndDropdown'];
    const dialogRef = this.dialog.open(AddEditAgeGroupComponent, {
      data: {
        isEdit: isEdit,
        ageGroupList: this.ageGroupList,
        formData: formData
      },
      panelClass: panelClass,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(dialogResultData => {
      if (dialogResultData) {
        if (!isEdit) {
          this.addAgeGroupAPI(dialogResultData);
        } else
          this.editAgeGroupAPI(formData.id, dialogResultData);
      }
    });
  }

  addAgeGroupAPI(data) {
    data.country = this.selectedCountry.id;
    this.ageGroupService.addAgeGroup(data).pipe(takeUntil(this.unsubscribeAddAgeGroup$)).subscribe((res) => {
      this.getData();
    });
  }

  editAgeGroupAPI(id, data) {
    this.ageGroupService.editAgeGroup(id, data).pipe(takeUntil(this.unsubscribeEditAgeGroup$)).subscribe((res) => {
      this.getData();
    });
  }


  confirmDelete(id) {
    const title = "Delete Age Group";
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
    this.ageGroupService.deleteAgeGroup(id).pipe(takeUntil(this.unsubscribeDeleteAgeGroup$)).subscribe((res) => {
      this.getData();
    });
  }

  ngOnDestroy() {
    if (this.unsubscribeAddAgeGroup$) {
      this.unsubscribeAddAgeGroup$.next();
      this.unsubscribeAddAgeGroup$.complete();
    }
    if (this.unsubscribeCountry$) {
      this.unsubscribeCountry$.next();
      this.unsubscribeCountry$.complete();
    }
    if (this.unsubscribeAgeGroup$) {
      this.unsubscribeAgeGroup$.next();
      this.unsubscribeAgeGroup$.complete();
    }
    if (this.unsubscribeDeleteAgeGroup$) {
      this.unsubscribeDeleteAgeGroup$.next();
      this.unsubscribeDeleteAgeGroup$.complete();
    }
    if (this.unsubscribeEditAgeGroup$) {
      this.unsubscribeEditAgeGroup$.next();
      this.unsubscribeEditAgeGroup$.complete();
    }
  }

}
