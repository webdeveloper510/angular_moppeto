import { Injectable } from '@angular/core';
import { RootService } from "../root.service";
import { Observable } from 'rxjs';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { catchError, retry } from 'rxjs/operators';
import { AddCountry, AddCountryResponse } from 'src/app/Pages/Countries/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getCountries<T>(querparams: Object = {}): Observable<T> {
    let url = `countries?perpage=${querparams.hasOwnProperty('perPage') ? querparams['perPage'] : 3}&offset=${querparams.hasOwnProperty('offset') ? querparams['offset'] : 0}`;
    return this.root_service.get<T>(url);
  }

  public getAllCountries<T>(): Observable<T> {
    let url = `countries`;
    return this.root_service.get<T>(url);
  }

  public addCountry(data: AddCountry): Observable<AddCountryResponse> {
    let url = `countries`;
    return this.root_service.post<AddCountryResponse>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public addCity(data, id): Observable<any> {
    let url = `countries/${id}/cities/create`;
    return this.root_service.post<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public updateCountry(data, id): Observable<any> {
    let url = `countries/${id}`;
    return this.root_service.patch<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteCountry(id): Observable<any> {
    let url = `countries/${id}`;
    return this.root_service.delete<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteCities(id, delObj): Observable<any> {
    let url = `countries/${id}/cities/delete`;
    console.log('delObj ', delObj);
    return this.root_service.post<any>(url, delObj).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteRegions(id, cityId, delObj): Observable<any> {
    let url = `countries/${id}/cities/${cityId}/regions/delete`;
    return this.root_service.post<any>(url, delObj).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteAreas(id, cityId, regionId, delObj): Observable<any> {
    let url = `countries/${id}/cities/${cityId}/regions/${regionId}/areas/delete`;
    return this.root_service.post<any>(url, delObj).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }


}
