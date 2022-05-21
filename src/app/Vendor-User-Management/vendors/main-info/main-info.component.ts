import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vendor } from 'src/app/shared/interfaces/vendor_user_management/vendor.I';
import { DownloadTableComponent } from '../../../shared/download-table/download-table.component';
import { DataService } from "../../../shared/data/data.service"
import { Subscription } from 'rxjs';
import { VendorsComponent } from "../vendors.component";
import { VendorService } from "../../../services/vendor_user_management/vendor.service";
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})

export class MainInfoComponent implements OnInit {

  countries: any[] = [];
  selectedCountry: any;

  searchInput: String;

  public vendors: Vendor[] = [];
  public Subscription: Subscription;
  public status: String = "all";
  public vendorsCsv: Vendor[] = [];
  public pagination: any = {
    count: 1
  }

  public CsvDataOptions: any = {
    custom_heading: {
      legal_name: "Vendor name",
      code: "Vendor code",
      created_at: "Date joined"
    },
    dataSet: [],
    fieldSeparator: "_"
  }

  public current_date = `${new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate()}-${((new Date().getMonth()) + 1) > 9 ? ((new Date().getMonth()) + 1) : '0' + ((new Date().getMonth()) + 1)}-${new Date().getFullYear()}`;

  public aceAndDec: Boolean = false;

  vendorNameAscSort: boolean = true;
  dateAscSort: boolean = true;

  constructor
    (
      private dialog: MatDialog,
      private _dataService: DataService,
      private vendorComponent: VendorsComponent,
      private _vendorService: VendorService,
      private toastr: ToastrService,
      private trackByService: TrackByService,
      private paginationService: PaginationService
    ) { }

  ngOnInit(): void {
    this.initialMailInfo();
  }

  ngOnDestroy() {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
    }
  }

  public initialMailInfo() {
    this.Subscription = this._dataService.getVendorsSource$.subscribe(vendors => {
      console.log('vendors ', vendors);
      if (vendors && vendors.country !== "") {

        this.pagination = vendors.hasOwnProperty('pagination') ? vendors['pagination'] : {};
        this.paginationService.setPaginationData(this.pagination);
        this.selectedCountry = vendors.hasOwnProperty('country') ? vendors['country'] : {};

        if (this.pagination) {
          this.vendors = this.pagination.hasOwnProperty('results') ? this.pagination['results'] : [];
        }

        this.vendors = this.vendors.map(data => ({ ...data, preferred_name: this.getContactName(data.vendor) }));
        this.status = vendors.hasOwnProperty('barTag') ? vendors['barTag'] : "all";

        if (this.vendors.length > 0) {
          this.CsvDataOptions.dataSet = [];
          // for (let i = 0; i < this.vendors.length; i ++) {
          //   this.CsvDataOptions.dataSet.push(
          //     {
          //       legal_name: this.vendors[i].legal_name,
          //       code: this.vendors[i].code,
          //       name: this.vendors[i].name,
          //       email: this.vendors[i].email,
          //       country: this.vendors[i].country,
          //       entity_reg_number: this.vendors[i].entity_reg_number,
          //       created_at: this.vendors[i].created_at,
          //       vendor_status: this.vendors[i].vendor_status
          //     }
          //   )
          // }
        }
      }

    }, error => {
      console.error(error);
    })

    this._dataService.getCountriesSource$.subscribe((res: any) => {
      this.countries = res;
    })
  }

  getContactName(object) {
    if (object)
      return object.firstname + " " + object.lastname;
  }

  downloadTable() {
    if (!this.selectedCountry && typeof this.selectedCountry == 'undefined') {
      this.toastr.show("Please select a country");
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
        if (dialogResult && dialogResult['success'] && dialogResult['for'] == "all") {
          this._vendorService.downloadFile(dialogResult.data, `vendors-info-${this.current_date}`)
        } else if (dialogResult && dialogResult['success'] && dialogResult['for'] == "current") {
          this._vendorService.downloadFile(this.csvDownload(this.CsvDataOptions), `vendor-main-info${this.status == "all" ? "" : "-" + this.status.toLowerCase()}-${this.current_date}`);
        }
      });
    }

  }

  private csvDownload(options: any) {
    if (typeof options != "object") {
      return new Error('Params only except object type!');
    } else {
      const dataSet = typeof options != "object" ? JSON.parse(options.dataSet) : options.dataSet;
      let str = '';
      let row = 'S.No,';
      for (let index in dataSet[0]) {
        if (options.custom_heading.hasOwnProperty(index)) {
          row += options.custom_heading[index] + ',';
        } else {
          let replace = index.replace(options.fieldSeparator, " ").replace("_", " ");
          let headerSplit = replace.split(" ");
          let header = "";
          if (headerSplit.length > 0) {
            for (let s = 0; s < headerSplit.length; s++) {
              header += `${headerSplit[s].substr(0, 1).toLocaleUpperCase()}${headerSplit[s].substr(1).toLocaleLowerCase()} `

              if (s == headerSplit.length - 1) {
                row += header + ',';
              }
            }
          }
        }
      }
      row = row.slice(0, -1);
      str += row + '\r\n';
      for (let i = 0; i < dataSet.length; i++) {
        let line = (i + 1) + '';
        for (let head in dataSet[0]) {
          line += ',' + dataSet[i][head];
        }
        str += line + '\r\n';
      }
      return str;
    }
  }

  DownloadTableComponent(DownloadTableComponent: any, arg1: { maxWidth: string; data: { title: string; DownloadCurrentPage: string; DownloadAllData: string; }; }) {
    throw new Error('Method not implemented.');
  }

  public checkStatus(status: String): boolean {
    if (status == "ACTIVE") {
      return true;
    } else if (status === "SUSPENDED") {
      return false;
    }
  }

  pageChangeEvent() {
    this.initialMailInfo();
  }

  public changeStatus(status: String): void {
    if (!this.selectedCountry) 
      this.toastr.error("Please select a country");
    else {
      this.status = status;
      this.vendorComponent.setVendors( this.selectedCountry, status);
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

  public sortBy(type: string): void {
    let key = "";
    if (type == 'date') {
      key = 'created_at';
    } else if (type == 'name') {
      key = 'legal_name';
    }
    this.vendors.sort((a, b): any => {
      if (this.aceAndDec) {
        if (type == 'name') {
          return a[key] !== b[key] ? a[key] < b[key] ? -1 : 1 : 0;
        } else {
          const dateA = new Date(a[key]);
          const dateB = new Date(b[key]);
          return dateA !== dateB ? dateA < dateB ? -1 : 1 : 0;
        }

      } else {
        if (type == 'name') {
          return a[key] !== b[key] ? a[key] > b[key] ? -1 : 1 : 0;
        } else {
          const dateA = new Date(a[key]);
          const dateB = new Date(b[key]);
          return dateA !== dateB ? dateA > dateB ? -1 : 1 : 0;
        }

      }
    });
  }

  toggleSorting(sortingType: string) {
    if (sortingType === 'vendorName') {
      this.vendorNameAscSort = !this.vendorNameAscSort;
    }
    if (sortingType === 'dateJoined') {
      this.dateAscSort = !this.dateAscSort;
    }
  }

}
