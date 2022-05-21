import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class HomepageHeaderService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getHeaderList(paginationURl, querparams): Observable<any> {
    let url = `userfeedback?${paginationURl}&first_date=${querparams.first_date}&last_date=${querparams.last_date}&platform_tyoe=${querparams.platform_tyoe}&city=${querparams.city}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
