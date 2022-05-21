import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SubAdmin, SubAdminResponse } from 'src/app/Pages/sub-admin/sub-admin.model';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class SubAdminService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getSubAdminList(querparams: any): Observable<SubAdminResponse> {
    let url = `auth/sub-admin?perpage=${querparams.perPage}`;
    return this.root_service.get<SubAdminResponse>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public getSubAdminById(id): Observable<SubAdmin> {
    let url = `auth/sub-admin/${id}`;
    return this.root_service.get<SubAdmin>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public editSubAdminById(id, data): Observable<SubAdmin> {
    let url = `auth/sub-admin/${id}`;
    return this.root_service.patch<SubAdmin>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public addSubAdmin(data): Observable<SubAdmin> {
    let url = `auth/sub-admin/`;
    return this.root_service.post<SubAdmin>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public updateSubAdminStatus(id): Observable<SubAdmin> {
    let url = `auth/sub-admin/${id}/status`;
    return this.root_service.post<SubAdmin>(url, null).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteSubAdmin(id): Observable<SubAdmin> {
    let url = `auth/sub-admin/${id}`;
    return this.root_service.delete<SubAdmin>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
