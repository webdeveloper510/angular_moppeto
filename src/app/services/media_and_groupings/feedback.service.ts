import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getFeedbackList(paginationURl, querparams): Observable<any> {
    let url = `userfeedback?${paginationURl}&country=${querparams.country}&city=${querparams.city}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
