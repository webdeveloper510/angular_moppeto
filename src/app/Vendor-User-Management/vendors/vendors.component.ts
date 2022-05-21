import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VendorService} from "../../services/vendor_user_management/vendor.service";
import {DataService} from "../../shared/data/data.service";
import { Observable, Subject, Subscription } from "rxjs";
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  countries = [];
  vendors = null;
  selectedCountry: string = null;
  private unsubscribeCountry$ = new Subject<void>();

  constructor(
    private router: Router,
    private _vendorService: VendorService,
    private _dataService: DataService,
    private commonFunctionsService: CommonFunctionsService,
  ) { }

  public Subscription: Subscription;

  ngOnInit(): void {
    this.router.navigate(['/vendors/main-info']);
    this.getCountry();
  }

  
  private getCountry(): void {
    this.commonFunctionsService.getCountries().pipe(takeUntil(this.unsubscribeCountry$)).subscribe((countries: any) => {
      this.countries = countries;
    });
  }

  public setVendors(country: String, status: String = 'all', perPage: Number = 10) {
    this._vendorService.getVedor({status, country, perPage}).subscribe((vendors: any) => {
      console.log('vendors ', vendors);
      if (vendors) {
        this.vendors = vendors;
        this._dataService.SaveVendorsForShare({pagination: vendors, country: country, barTag: status});
      }
      
    }, error => {
      console.error("ERROR!", error);
    })
  }

  onChangeCountry() {
    this.setVendors(this.selectedCountry);
  }


  updateVendorAndSet (setObject: {}, _id: String, index: number): Observable<any> {
    return this._vendorService.updateVendor({
      ...setObject,
      _id: _id
    });
  }
}
