import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { UserResponse } from 'src/app/shared/interfaces/vendor_user_management/user.I';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  public getUsersFamilies(paginationURl, querparams): Observable<UserResponse> {
    let url = `users/families?${paginationURl}&country=${querparams.country}${(querparams.status !== 'all') ? '&status=' + querparams.status.toLocaleUpperCase() : ""}`;
    return this.root_service.get<UserResponse>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  public usersChangeStatus(id, data): Observable<UserResponse> {
    let url = `users/families/changeStatus/${id}`;
    return this.root_service.patch<UserResponse>(url, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }
}
