import { Injectable } from '@angular/core';
import {RootService} from "../root.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcriptionPriceService {

  constructor(
    private root_service: RootService
  ) { }

  public getSubcriptionPackages (params: any): Observable<any> {
    return this.root_service.get<any>(`subscription_packages/country/${params.country}?perpage=10`);
  }

  public getSubType (): Observable<any> {
    return this.root_service.get<any>("subscription_packages/types");
  } 

  public getCountry (): Observable<any> {
    return this.root_service.get<any>("countries?mode=compact");
  } 

  public editSub (body): Observable<any> {
    return this.root_service.patch<any>(`subscription_packages/${body.id}`, body);
  }

  
}
