import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class AgeGroupService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getAgeGroupList(querparams): Observable<any> {
    let url = `agegroups?country=${querparams.country}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public addAgeGroup(data): Observable<any> {
    let url = `agegroups/`;
    return this.root_service.post<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public getAgeGroupById(id): Observable<any> {
    let url = `agegroups/${id}/`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public editAgeGroup(id, data): Observable<any> {
    let url = `agegroups/${id}/`;
    return this.root_service.patch<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteAgeGroup(id): Observable<any> {
    let url = `agegroups/${id}/`;
    return this.root_service.delete<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
