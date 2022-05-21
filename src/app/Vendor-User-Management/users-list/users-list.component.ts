import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { PaginationService } from 'src/app/services/pagination.service';
import { UserService } from 'src/app/services/vendor_user_management/user.service';
import { User, UserResponse, UserStatusEnum, UserStatusList } from 'src/app/shared/interfaces/vendor_user_management/user.I';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { DownloadTableComponent } from '../../shared/download-table/download-table.component';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList: Array<User>;
  userStatusList = UserStatusList;
  userStatusEnum = UserStatusEnum;
  selectedStatus = UserStatusEnum.All;
  isAPIReponseCome: boolean = false;
  countries = [];
  selectedCountry: string = null;
  private unsubscribeUserFamily$ = new Subject<void>();
  private unsubscribeUserStatusChange$ = new Subject<void>();
  private unsubscribeCountry$ = new Subject<void>();
  userData = null;
  pagination: any;

  // search
  searchText = null;
  @ViewChild('userSearchInput', { static: true }) userSearchInput: ElementRef;


  constructor(private dialog: MatDialog,
    private userService: UserService,
    private commonFunctionsService: CommonFunctionsService,
    private trackByService: TrackByService,
    private paginationService: PaginationService) {
  }

  ngOnInit(): void {
    this.getCountry();
    fromEvent(this.userSearchInput.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
      .subscribe(newText => {
        this.getData();
      });
  }

  private getPaginationData(event) {
    if (event && event.success) {
      if (event.hasOwnProperty('data')) {
        //this.vendors = event.data["results"] ? event.data["results"] : [];
        this.pagination = event.data;
      } else if (event.hasOwnProperty('perPage')) {
        //this.vendorComponent.setVendors(this.status, this.selectedCountry, event.perPage);
      }
    }
  }

  private getCountry(): void {
    this.commonFunctionsService.getCountries().pipe(takeUntil(this.unsubscribeCountry$)).subscribe((countries: any) => {
      this.countries = countries;
    });
  }

  onChangeCountry() {
    this.getData();
  }

  onChangeStatus(status): void {
    this.selectedStatus = status;
    this.paginationService.resetPagination();
    this.getData();
  }

  pageChangeEvent() {
    this.getData();
  }

  getData(): void {
    const querparams = {
      status: this.selectedStatus,
      country: this.selectedCountry
    }
    this.isAPIReponseCome = false;
    this.userList = [];
    this.userService.getUsersFamilies(this.paginationService.urlparams, querparams).pipe(takeUntil(this.unsubscribeUserFamily$)).subscribe((res: UserResponse) => {
      this.isAPIReponseCome = true;
      this.paginationService.setPaginationData(res);
      this.userList = res.results;
      this.userData = res;
      if (this.userList && this.userList.length > 0) {
        this.userList = this.userList.map(userData => ({
          ...userData,
          superUserName: userData.superadmin ? this.getUserName(userData.superadmin.first_name, userData.superadmin.last_name) : null,
          adminUserName: userData.admin ? this.getUserName(userData.admin.first_name, userData.admin.last_name) : null,
          kids: userData.kids.map(kid => ({ ...kid, username: this.getUserName(kid.first_name, kid.last_name) }))
        }));
      }
    });
  }

  userChangeStatus(id, status) {
    const model = {
      status: status
    }
    this.userService.usersChangeStatus(id, model).pipe(takeUntil(this.unsubscribeUserStatusChange$)).subscribe((res) => {
      this.getData();
    });
  }


  getUserName(firstName: string, lastName: string): string {
    if (firstName && lastName)
      return firstName + ' ' + lastName;
    else if (firstName && !lastName)
      return firstName
    else
      return lastName;
  }

  downloadTable() {
    const dialogRef = this.dialog.open(DownloadTableComponent, {
      data: {
        title: "Download as CSV",
        DownloadCurrentPage: "Download current page",
        DownloadAllData: "Download all data",
      },
      panelClass: ['custom-dialog-class', 'ngClass']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
      }
    });
  }
  DownloadTableComponent(DownloadTableComponent: any, arg1: { maxWidth: string; data: { title: string; DownloadCurrentPage: string; DownloadAllData: string; }; }) {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    if (this.unsubscribeUserFamily$) {
      this.unsubscribeUserFamily$.next();
      this.unsubscribeUserFamily$.complete();
    }
    if (this.unsubscribeCountry$) {
      this.unsubscribeCountry$.next();
      this.unsubscribeCountry$.complete();
    }
  }

}
