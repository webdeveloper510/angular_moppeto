import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  private actionStatus = new BehaviorSubject<boolean>(true)
  attributeActionStatus = this.actionStatus.asObservable();

  showActionButton(status: boolean) {
    this.actionStatus.next(status)
  }

  public getAttributesList(): Observable<any> {
    let url = `attributes/all`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public addAttribute(data): Observable<any> {
    let url = `attributes/all`;
    return this.root_service.post<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public editAttribute(id, data): Observable<any> {
    let url = `attributes/${id}`;
    return this.root_service.patch<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteAttribute(id): Observable<any> {
    let url = `attributes/${id}`;
    return this.root_service.delete<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
