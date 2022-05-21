import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ReviewsResponse } from 'src/app/shared/interfaces/vendor_user_management/review.I';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getReviews(perpage: any): Observable<ReviewsResponse> {
    let url = `reviews?${perpage}`;
    return this.root_service.get<ReviewsResponse>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public getVendor(querparams: any): Observable<any> {
    let url = `vendors?country=${querparams.country}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public onChangeStatus(id: string, data): Observable<any> {
    let url = `reviews/${id}`
    return this.root_service.patch<any>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}