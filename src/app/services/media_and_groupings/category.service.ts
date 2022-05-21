import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getCategoryList(): Observable<any> {
    let url = `categories/all`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public addCategory(data): Observable<any> {
    let url = `categories/all`;
    return this.root_service.post<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public editCategory(id, data): Observable<any> {
    let url = `categories/${id}`;
    return this.root_service.patch<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public deleteCategory(id): Observable<any> {
    let url = `categories/${id}`;
    return this.root_service.delete<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public UpdateCategoryweightage(weightage_list): Observable<any> {
    let url = `categories/UpdateCategoryWeightages`;
    return this.root_service.post<any>(url, weightage_list).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
