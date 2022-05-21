import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageHeaderService {

  public citySubject = new BehaviorSubject<string>(null);
  public plateformSubject = new BehaviorSubject<string>(null);

  constructor(private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  getSuperAdminHeaderList(querparams): Observable<any> {
    let url = `superadminheaders?first_date=${querparams.first_date}&last_date=${querparams.last_date}&city=${querparams.city}&platform_type=${querparams.platform_type}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  addSuperAdminHeader(model): Observable<any> {
    let url = `superadminheaders`;
    return this.root_service.post<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  editSuperAdminHeader(model, id): Observable<any> {
    let url = `superadminheaders/${id}`;
    return this.root_service.patch<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  deleteSuperAdminHeader(id): Observable<any> {
    let url = `superadminheaders/${id}`;
    return this.root_service.delete<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
