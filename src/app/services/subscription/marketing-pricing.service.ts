import { Injectable } from '@angular/core';
import {RootService} from "../root.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingPricingService {

  constructor(private root_service: RootService) { }

  public settingsList(params): Observable<any> {
    return this.root_service.get<any>(`marketings/settings${params.country ? "?country="+params.country : "" }${params.city ? "&city="+params.city : '' }`);
  }

  public settingsUpdate(params): Observable<any> {
    return this.root_service.patch<any>(`marketings/settings${params.country ? "?country="+params.country : "" }${params.city ? "&city="+params.city : '' }`, params.dataSet);
  }
}
