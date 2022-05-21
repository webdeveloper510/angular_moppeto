import { Injectable } from '@angular/core';
import {RootService} from "../root.service";
import { Observable } from 'rxjs';
import {VendorResponseI, filterI, VendorSubscription} from "../../shared/interfaces/subscription/vendor_subscription.I"

@Injectable({
  providedIn: 'root'
})
export class VendorSubscriptionService {

  constructor(
    private root_service: RootService
  ) { }

  public getSubList (filter): Observable<any> {
    let url = (filter.type == "ALL" && filter.status == 'ALL') ? `VendorSubscription?perpage=10&country=${filter.country}` : `VendorSubscription?perpage=10&country=${filter.country}&type=${filter.type}&status=${filter.status}`;
    return this.root_service.get<any>(url);
  }

  public getVendorSubscription (data: filterI): Observable<VendorResponseI> {
    return this.root_service.post<VendorResponseI>("vendor_subscription/filter?perpage=20", data);
  }

  public updateVendorSubscription (data: VendorSubscription): Observable<VendorSubscription> {
    return this.root_service.put<VendorSubscription>(`vendor/${data.vendor_id}/subscription/custom_plan`, data);
  }

  public getVendorSubscriptionType (): Observable<String[]> {
    return this.root_service.get<String[]>("subscription_packages/types");
  }

  public getCountry (): Observable<any> {
    return this.root_service.get<any>("countries?mode=compact");
  }
  
  public remaining_payable(price, id): Observable<any> {
    return this.root_service.get<any>(`VendorSubscription/${id}/remaining_payable/?price=${price}`);
  }

  public payment_link(id): Observable<any> {
    return this.root_service.get<any>(`VendorSubscription/${id}/payment_link/`);
  }

  public cancelSub(id): Observable<any> {
    return this.root_service.post<any>(`VendorSubscription/${id}/cancel/`);
  }

  public planRequestUpdate (data): Observable<any> {
    return this.root_service.post<any>(`VendorSubscription/${data.id}/request_upgrade/`, {subscription: data});
  }
}
