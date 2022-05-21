import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadTableComponent } from '../../../shared/download-table/download-table.component';
import { DataService } from "../../../shared/data/data.service"
import { Subscription } from 'rxjs';
import { Vendor } from 'src/app/shared/interfaces/vendor_user_management/vendor.I';
import { VendorsComponent } from "../vendors.component";
import { ToastService } from "../../../services/toast.service"
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  countries: any[] = [];

  selectedCountry: any;
  searchInput: String;

  public pagination: any = {
    count: 1
  }

  constructor
    (
      private dialog: MatDialog,
      private _dataService: DataService,
      private vendorComponent: VendorsComponent,
      private toastr: ToastrService,
      private trackByService: TrackByService,
      private paginationService: PaginationService
    ) { }

  public vendors: Vendor[] = [];
  public Subscription: Subscription;
  public status: String = "all";


  ngOnInit(): void {
    this.initialMailInfo();
  }

  ngOnDestroy() {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
    }
  }

  pageChangeEvent() {
    this.initialMailInfo();
  }

  public initialMailInfo() {
    this.Subscription = this._dataService.getVendorsSource$.subscribe(vendors => {
      if (vendors && vendors.country !== "") {
        this.pagination = vendors.hasOwnProperty('pagination') ? vendors['pagination'] : {};
        this.paginationService.setPaginationData(this.pagination);
        this.selectedCountry = vendors.hasOwnProperty('country') ? vendors['country'] : {};

        if (this.pagination) {
          this.vendors = this.pagination.hasOwnProperty('results') ? this.pagination['results'] : [];
        }

        this.status = vendors.hasOwnProperty('barTag') ? vendors['barTag'] : "all";
      }

    }, error => {
      console.error(error);
    });

    // this._dataService.getMainInfoSetupSource$.subscribe((mainInfoSetup) => {
    //   if (mainInfoSetup) {
    //     this.selectedCountry = mainInfoSetup.hasOwnProperty("country") ? mainInfoSetup.country : null;
    //     this.pagination = mainInfoSetup.hasOwnProperty("pagination") ? mainInfoSetup.pagination : this.pagination;
    //     console.log("mainInfoSetup", mainInfoSetup)
    //     this.vendors = this.pagination.hasOwnProperty("results") ? this.pagination.results : [];
    //   }

    // }, error => {
    //   console.error(error); 
    // });

    this._dataService.getCountriesSource$.subscribe((res: any) => {
      this.countries = res;
    }, error => {
      console.error(error);
    });
  }

  downloadTable() {
    if (!this.selectedCountry && typeof this.selectedCountry == 'undefined') {
      this.toastr.error("Please select a country");
    } else {
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

  }


  DownloadTableComponent(DownloadTableComponent: any, arg1: { maxWidth: string; data: { title: string; DownloadCurrentPage: string; DownloadAllData: string; }; }) {
    throw new Error('Method not implemented.');
  }

  public changeStatus(status: String): void {
    if (!this.selectedCountry) {
      this.toastr.error("Please select a country");
    } else {
      this.status = status;
      this.vendorComponent.setVendors(this.selectedCountry, this.status);
    }
  }

  public checkStatus(status: String): boolean {
    if (status == "ACTIVE") {
      return true;
    } else if (status === "SUSPENDED") {
      return false;
    }
  }

  public changeVendorStatus(status: String, vendor_id: String, index: number): void {
    let vendor_status = "ACTIVE";
    if (status == "ACTIVE") {
      vendor_status = "SUSPENDED";
    }
    this.vendorComponent.updateVendorAndSet({
      vendor_status: vendor_status
    }, vendor_id, index).subscribe((res: any) => {
      if (res) {
        this.changeStatus(this.status);
      }
    })
  }

  public selectCountry() {
    this.vendorComponent.setVendors(this.selectedCountry, this.status);
  }

  public getPaginationData(event) {
    if (event && event.success) {
      if (event.hasOwnProperty('data')) {
        this.vendors = event.data["results"] ? event.data["results"] : [];
        this.pagination = event.data;
      } else if (event.hasOwnProperty('perPage')) {
        this.vendorComponent.setVendors(this.selectedCountry, this.status, event.perPage);
      }
    }
  }

}
