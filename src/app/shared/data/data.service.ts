import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {Vendor} from "../interfaces/vendor_user_management/vendor.I"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Variable
  public vendors: any = null;
  public vendorsSubject = new Subject<Vendor[]>();

  public countries: any = null;

  public main_info_setup: any = null;

  public updateVendoreSub: any = {
    active: false,
    data: {}
  };

  // Observable sources
  private vendorsSource = new BehaviorSubject(this.vendors);

  private countriesSource = new BehaviorSubject(this.countries);

  private mainInfoSetupSource = new BehaviorSubject(this.main_info_setup);

  private updateVendoreSubSource = new BehaviorSubject(this.updateVendoreSub);

  // Observable streams
  public getVendorsSource$ = this.vendorsSource.asObservable();

  public getCountriesSource$ = this.countriesSource.asObservable();

  public getMainInfoSetupSource$ = this.mainInfoSetupSource.asObservable();

  public getUpdateVendeor$ = this.updateVendoreSubSource.asObservable();

  // Service message commands
  public SaveVendorsForShare (data): void {
    this.vendorsSource.next(data);
  }

  public SaveCountriesForShare (data: any[]): void {
    this.countriesSource.next(data);
  }

  public SaveMainInfoSetupForShare (data: any): void {
    this.mainInfoSetupSource.next(data);
  }

  public SaveUpdateDataForVendor (data: any): void {
    this.updateVendoreSubSource.next(data);
  }
}
